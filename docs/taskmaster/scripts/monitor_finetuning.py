#!/usr/bin/env python3
"""
Simple Fine-tuning Job Monitor
Web3Auth Documentation Project
"""

import os
import time
from datetime import datetime
import json
from openai import OpenAI

def check_job_status(job_id):
    """Check the status of a fine-tuning job"""
    client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

    try:
        job = client.fine_tuning.jobs.retrieve(job_id)

        status_info = {
            'job_id': job.id,
            'status': job.status,
            'model': job.model,
            'fine_tuned_model': job.fine_tuned_model,
            'training_file': job.training_file,
            'created_at': job.created_at,
            'finished_at': job.finished_at,
            'hyperparameters': {
                'batch_size': job.hyperparameters.batch_size,
                'learning_rate_multiplier': job.hyperparameters.learning_rate_multiplier,
                'n_epochs': job.hyperparameters.n_epochs
            },
            'trained_tokens': job.trained_tokens,
            'organization_id': job.organization_id,
            'user_provided_suffix': job.user_provided_suffix
        }

        return status_info

    except Exception as e:
        print(f"Error checking job status: {e}")
        return None

def format_timestamp(timestamp):
    """Format Unix timestamp to readable format"""
    if timestamp:
        return datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d %H:%M:%S')
    return "Not set"

def monitor_job(job_id, check_interval=60):
    """Monitor a fine-tuning job with periodic checks"""
    print(f"🔍 Monitoring fine-tuning job: {job_id}")
    print(f"📊 Check interval: {check_interval} seconds")
    print("=" * 60)

    while True:
        status = check_job_status(job_id)
        if not status:
            print("❌ Failed to get job status")
            break

        print(f"⏰ Check time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"📊 Status: {status['status']}")
        print(f"🧠 Model: {status['model']}")
        print(f"📅 Created: {format_timestamp(status['created_at'])}")
        print(f"📈 Trained Tokens: {status['trained_tokens'] or 'N/A'}")

        if status['fine_tuned_model']:
            print(f"🎯 Fine-tuned Model: {status['fine_tuned_model']}")

        if status['finished_at']:
            print(f"🏁 Finished: {format_timestamp(status['finished_at'])}")

        print("-" * 60)

        # Check if job is complete
        if status['status'] in ['succeeded', 'failed', 'cancelled']:
            print(f"🎉 Job completed with status: {status['status']}")
            if status['status'] == 'succeeded':
                print(f"✅ Your fine-tuned model: {status['fine_tuned_model']}")
            break

        # Wait before next check
        time.sleep(check_interval)

def main():
    job_id = "ftjob-TM8Rh8Ll888qBQkuWoC4mRQU"

    print("🚀 Web3Auth Fine-tuning Job Monitor")
    print("=" * 60)

    if not os.getenv('OPENAI_API_KEY'):
        print("❌ OpenAI API key not found. Set OPENAI_API_KEY environment variable.")
        return

    # Get current status
    current_status = check_job_status(job_id)
    if current_status:
        print(f"📊 Current Status: {current_status['status']}")
        print(f"🧠 Model: {current_status['model']}")
        print(f"📅 Created: {format_timestamp(current_status['created_at'])}")
        print("=" * 60)

        # Start monitoring if not complete
        if current_status['status'] not in ['succeeded', 'failed', 'cancelled']:
            monitor_job(job_id, check_interval=30)
        else:
            print(f"🎯 Job already completed with status: {current_status['status']}")
            if current_status['fine_tuned_model']:
                print(f"✅ Fine-tuned model: {current_status['fine_tuned_model']}")
    else:
        print("❌ Failed to get job status")

if __name__ == "__main__":
    main()
