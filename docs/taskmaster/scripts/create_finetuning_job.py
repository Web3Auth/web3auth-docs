#!/usr/bin/env python3
"""
OpenAI Fine-tuning Job Creation Script
Web3Auth Documentation Project
"""

import os
import json
import time
import sys
from typing import Dict, Any, Optional
import logging
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('docs/taskmaster/logs/finetuning.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

try:
    import openai
    from openai import OpenAI
except ImportError:
    print("OpenAI library not installed. Install with: pip install openai")
    sys.exit(1)

class FineTuningJobManager:
    """Manages OpenAI fine-tuning jobs"""

    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or os.getenv('OPENAI_API_KEY')
        if not self.api_key:
            raise ValueError("OpenAI API key required. Set OPENAI_API_KEY environment variable.")

        self.client = OpenAI(api_key=self.api_key)
        self.job_id = None
        self.model_id = None

    def upload_training_file(self, file_path: str) -> str:
        """Upload training data file to OpenAI"""
        logger.info(f"Uploading training file: {file_path}")

        try:
            with open(file_path, 'rb') as f:
                response = self.client.files.create(
                    file=f,
                    purpose='fine-tune'
                )

            file_id = response.id
            logger.info(f"Training file uploaded successfully: {file_id}")

            # Wait for file to be processed
            self._wait_for_file_processing(file_id)

            return file_id

        except Exception as e:
            logger.error(f"Failed to upload training file: {str(e)}")
            raise

    def _wait_for_file_processing(self, file_id: str, max_wait: int = 300) -> None:
        """Wait for file to be processed by OpenAI"""
        logger.info(f"Waiting for file processing: {file_id}")

        start_time = time.time()
        while time.time() - start_time < max_wait:
            try:
                file_info = self.client.files.retrieve(file_id)
                status = file_info.status

                if status == 'processed':
                    logger.info("File processing completed")
                    return
                elif status == 'error':
                    raise Exception(f"File processing failed: {file_info}")

                logger.info(f"File status: {status}, waiting...")
                time.sleep(10)

            except Exception as e:
                logger.error(f"Error checking file status: {str(e)}")
                raise

        raise Exception(f"File processing timeout after {max_wait} seconds")

    def create_fine_tuning_job(self, training_file_id: str, config: Dict[str, Any]) -> str:
        """Create a fine-tuning job"""
        logger.info("Creating fine-tuning job")

        try:
            # Prepare job parameters
            job_params = {
                'training_file': training_file_id,
                'model': config.get('model', 'gpt-4o-mini-2024-07-18'),
                'suffix': config.get('suffix', 'web3auth-expert'),
            }

            # Add hyperparameters if specified
            hyperparameters = config.get('hyperparameters', {})
            if hyperparameters:
                job_params['hyperparameters'] = {}

                if 'learning_rate_multiplier' in hyperparameters:
                    job_params['hyperparameters']['learning_rate_multiplier'] = hyperparameters['learning_rate_multiplier']

                if 'batch_size' in hyperparameters:
                    job_params['hyperparameters']['batch_size'] = hyperparameters['batch_size']

                if 'n_epochs' in hyperparameters:
                    job_params['hyperparameters']['n_epochs'] = hyperparameters['n_epochs']

            # Create the job
            response = self.client.fine_tuning.jobs.create(**job_params)

            self.job_id = response.id
            logger.info(f"Fine-tuning job created: {self.job_id}")

            # Save job info
            self._save_job_info(response)

            return self.job_id

        except Exception as e:
            logger.error(f"Failed to create fine-tuning job: {str(e)}")
            raise

    def _save_job_info(self, job_response: Any) -> None:
        """Save job information to file"""
        job_info = {
            'job_id': job_response.id,
            'model': job_response.model,
            'training_file': job_response.training_file,
            'status': job_response.status,
            'created_at': job_response.created_at,
            'hyperparameters': job_response.hyperparameters,
            'suffix': getattr(job_response, 'suffix', None),
            'estimated_finish': getattr(job_response, 'estimated_finish', None)
        }

        # Save to file
        job_file = 'docs/taskmaster/logs/finetuning_job_info.json'
        os.makedirs(os.path.dirname(job_file), exist_ok=True)

        with open(job_file, 'w') as f:
            json.dump(job_info, f, indent=2)

        logger.info(f"Job info saved to: {job_file}")

    def monitor_job(self, job_id: Optional[str] = None) -> Dict[str, Any]:
        """Monitor fine-tuning job progress"""
        job_id = job_id or self.job_id
        if not job_id:
            raise ValueError("No job ID provided")

        logger.info(f"Monitoring job: {job_id}")

        try:
            job_info = self.client.fine_tuning.jobs.retrieve(job_id)

            status_info = {
                'job_id': job_info.id,
                'status': job_info.status,
                'model': job_info.model,
                'fine_tuned_model': job_info.fine_tuned_model,
                'training_file': job_info.training_file,
                'validation_file': job_info.validation_file,
                'created_at': job_info.created_at,
                'updated_at': job_info.updated_at,
                'finished_at': job_info.finished_at,
                'estimated_finish': job_info.estimated_finish,
                'hyperparameters': job_info.hyperparameters,
                'result_files': job_info.result_files,
                'trained_tokens': job_info.trained_tokens,
                'integrations': job_info.integrations,
                'seed': job_info.seed,
                'organization_id': job_info.organization_id,
                'user_provided_suffix': job_info.user_provided_suffix
            }

            logger.info(f"Job status: {status_info['status']}")

            if status_info['status'] == 'succeeded':
                self.model_id = status_info['fine_tuned_model']
                logger.info(f"Fine-tuning completed! Model: {self.model_id}")

            return status_info

        except Exception as e:
            logger.error(f"Error monitoring job: {str(e)}")
            raise

    def wait_for_completion(self, job_id: Optional[str] = None,
                          check_interval: int = 60, max_wait: int = 14400) -> Dict[str, Any]:
        """Wait for job completion (max 4 hours)"""
        job_id = job_id or self.job_id
        if not job_id:
            raise ValueError("No job ID provided")

        logger.info(f"Waiting for job completion: {job_id}")

        start_time = time.time()
        while time.time() - start_time < max_wait:
            status_info = self.monitor_job(job_id)

            if status_info['status'] == 'succeeded':
                logger.info("✅ Fine-tuning completed successfully!")
                return status_info
            elif status_info['status'] == 'failed':
                logger.error("❌ Fine-tuning failed!")
                raise Exception(f"Fine-tuning job failed: {status_info}")
            elif status_info['status'] == 'cancelled':
                logger.info("⏹️  Fine-tuning job cancelled")
                return status_info

            logger.info(f"Job status: {status_info['status']}, waiting {check_interval}s...")
            time.sleep(check_interval)

        raise Exception(f"Job completion timeout after {max_wait} seconds")

def main():
    """Main function"""
    if len(sys.argv) < 2:
        print("Usage: python create_finetuning_job.py <command> [options]")
        print("Commands:")
        print("  create <training_file_path>  - Create new fine-tuning job")
        print("  monitor <job_id>             - Monitor existing job")
        print("  list                         - List recent jobs")
        print("  wait <job_id>                - Wait for job completion")
        sys.exit(1)

    command = sys.argv[1]

    try:
        manager = FineTuningJobManager()

        if command == 'create':
            if len(sys.argv) < 3:
                print("Usage: python create_finetuning_job.py create <training_file_path>")
                sys.exit(1)

            training_file_path = sys.argv[2]

            # Load config
            fine_tuning_config = {
                'model': 'gpt-4o-mini-2024-07-18',
                'suffix': 'web3auth-expert-v1',
                'hyperparameters': {
                    'learning_rate_multiplier': 0.1,
                    'batch_size': 1,
                    'n_epochs': 3
                }
            }

            # Upload training file
            file_id = manager.upload_training_file(training_file_path)

            # Create job
            job_id = manager.create_fine_tuning_job(file_id, fine_tuning_config)

            print(f"✅ Fine-tuning job created: {job_id}")
            print("Use 'python create_finetuning_job.py monitor {job_id}' to monitor progress")

        elif command == 'monitor':
            if len(sys.argv) < 3:
                print("Usage: python create_finetuning_job.py monitor <job_id>")
                sys.exit(1)

            job_id = sys.argv[2]
            status_info = manager.monitor_job(job_id)

            print(f"Job ID: {status_info['job_id']}")
            print(f"Status: {status_info['status']}")
            print(f"Model: {status_info['fine_tuned_model'] or 'Training in progress'}")
            print(f"Created: {status_info['created_at']}")
            print(f"Updated: {status_info['updated_at']}")

        elif command == 'list':
            jobs = manager.list_jobs()
            print(f"Recent fine-tuning jobs:")
            for job in jobs:
                print(f"  {job.id}: {job.status} ({job.model})")

        elif command == 'wait':
            if len(sys.argv) < 3:
                print("Usage: python create_finetuning_job.py wait <job_id>")
                sys.exit(1)

            job_id = sys.argv[2]
            final_status = manager.wait_for_completion(job_id)

            if final_status['status'] == 'succeeded':
                print(f"✅ Training completed! Model: {final_status['fine_tuned_model']}")
            else:
                print(f"❌ Training ended with status: {final_status['status']}")

        else:
            print(f"Unknown command: {command}")
            sys.exit(1)

    except Exception as e:
        logger.error(f"Error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()
