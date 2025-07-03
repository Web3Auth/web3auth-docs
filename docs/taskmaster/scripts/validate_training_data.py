#!/usr/bin/env python3
"""
Training Data Validation Script for OpenAI Fine-tuning
Web3Auth Documentation Project
"""

import json
import os
import sys
from typing import Dict, List, Any, Tuple
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('docs/taskmaster/logs/validation.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

class TrainingDataValidator:
    """Validates JSONL training data for OpenAI fine-tuning"""

    def __init__(self, file_path: str):
        self.file_path = file_path
        self.errors = []
        self.warnings = []
        self.stats = {
            'total_examples': 0,
            'valid_examples': 0,
            'invalid_examples': 0,
            'total_tokens': 0,
            'avg_tokens_per_example': 0
        }

    def validate_file(self) -> Tuple[bool, Dict[str, Any]]:
        """Validate the entire training data file"""
        logger.info(f"Validating training data file: {self.file_path}")

        if not os.path.exists(self.file_path):
            self.errors.append(f"File not found: {self.file_path}")
            return False, self._generate_report()

        try:
            with open(self.file_path, 'r', encoding='utf-8') as f:
                for line_num, line in enumerate(f, 1):
                    self._validate_line(line_num, line.strip())

            self._calculate_stats()
            is_valid = len(self.errors) == 0

            logger.info(f"Validation complete. Valid: {is_valid}")
            return is_valid, self._generate_report()

        except Exception as e:
            self.errors.append(f"Error reading file: {str(e)}")
            return False, self._generate_report()

    def _validate_line(self, line_num: int, line: str) -> None:
        """Validate a single line of JSONL data"""
        if not line.strip():
            return  # Skip empty lines

        try:
            data = json.loads(line)
            self.stats['total_examples'] += 1

            # Validate structure
            if not isinstance(data, dict):
                self.errors.append(f"Line {line_num}: Expected object, got {type(data).__name__}")
                return

            # Validate required fields
            if 'messages' not in data:
                self.errors.append(f"Line {line_num}: Missing 'messages' field")
                return

            # Validate messages array
            messages = data['messages']
            if not isinstance(messages, list):
                self.errors.append(f"Line {line_num}: 'messages' must be an array")
                return

            if len(messages) < 2:
                self.errors.append(f"Line {line_num}: Need at least 2 messages (system + user/assistant)")
                return

            # Validate message structure
            valid_roles = {'system', 'user', 'assistant'}
            roles_found = []

            for msg_idx, message in enumerate(messages):
                if not isinstance(message, dict):
                    self.errors.append(f"Line {line_num}, Message {msg_idx + 1}: Expected object")
                    continue

                # Check required fields
                if 'role' not in message:
                    self.errors.append(f"Line {line_num}, Message {msg_idx + 1}: Missing 'role' field")
                    continue

                if 'content' not in message:
                    self.errors.append(f"Line {line_num}, Message {msg_idx + 1}: Missing 'content' field")
                    continue

                # Validate role
                role = message['role']
                if role not in valid_roles:
                    self.errors.append(f"Line {line_num}, Message {msg_idx + 1}: Invalid role '{role}'")
                    continue

                roles_found.append(role)

                # Validate content
                content = message['content']
                if not isinstance(content, str):
                    self.errors.append(f"Line {line_num}, Message {msg_idx + 1}: Content must be string")
                    continue

                if len(content.strip()) == 0:
                    self.errors.append(f"Line {line_num}, Message {msg_idx + 1}: Empty content")
                    continue

                # Count tokens (rough estimate)
                token_count = len(content.split())
                self.stats['total_tokens'] += token_count

            # Validate conversation structure
            if 'system' not in roles_found:
                self.warnings.append(f"Line {line_num}: No system message found")

            if 'user' not in roles_found:
                self.errors.append(f"Line {line_num}: No user message found")
                return

            if 'assistant' not in roles_found:
                self.errors.append(f"Line {line_num}: No assistant message found")
                return

            # Check for Web3Auth specific content
            content_text = ' '.join([msg['content'] for msg in messages]).lower()
            if 'web3auth' not in content_text:
                self.warnings.append(f"Line {line_num}: No Web3Auth content detected")

            self.stats['valid_examples'] += 1

        except json.JSONDecodeError as e:
            self.errors.append(f"Line {line_num}: Invalid JSON - {str(e)}")
            self.stats['invalid_examples'] += 1
        except Exception as e:
            self.errors.append(f"Line {line_num}: Validation error - {str(e)}")
            self.stats['invalid_examples'] += 1

    def _calculate_stats(self) -> None:
        """Calculate validation statistics"""
        if self.stats['total_examples'] > 0:
            self.stats['avg_tokens_per_example'] = self.stats['total_tokens'] / self.stats['total_examples']

        self.stats['invalid_examples'] = self.stats['total_examples'] - self.stats['valid_examples']

    def _generate_report(self) -> Dict[str, Any]:
        """Generate validation report"""
        return {
            'file_path': self.file_path,
            'validation_passed': len(self.errors) == 0,
            'stats': self.stats,
            'errors': self.errors,
            'warnings': self.warnings,
            'openai_compatibility': {
                'format_valid': len(self.errors) == 0,
                'min_examples_met': self.stats['valid_examples'] >= 10,
                'recommended_examples_met': self.stats['valid_examples'] >= 50,
                'token_count_reasonable': self.stats['total_tokens'] < 1000000
            }
        }

def main():
    """Main function"""
    if len(sys.argv) != 2:
        print("Usage: python validate_training_data.py <jsonl_file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    validator = TrainingDataValidator(file_path)

    is_valid, report = validator.validate_file()

    # Print summary
    print("\n" + "="*60)
    print("TRAINING DATA VALIDATION REPORT")
    print("="*60)
    print(f"File: {report['file_path']}")
    print(f"Validation Passed: {'✅ YES' if is_valid else '❌ NO'}")
    print(f"Total Examples: {report['stats']['total_examples']}")
    print(f"Valid Examples: {report['stats']['valid_examples']}")
    print(f"Invalid Examples: {report['stats']['invalid_examples']}")
    print(f"Total Tokens: {report['stats']['total_tokens']:,}")
    print(f"Avg Tokens/Example: {report['stats']['avg_tokens_per_example']:.1f}")

    # OpenAI Compatibility
    print("\nOpenAI Compatibility:")
    compat = report['openai_compatibility']
    print(f"  Format Valid: {'✅' if compat['format_valid'] else '❌'}")
    print(f"  Min Examples (10+): {'✅' if compat['min_examples_met'] else '❌'}")
    print(f"  Recommended Examples (50+): {'✅' if compat['recommended_examples_met'] else '❌'}")
    print(f"  Token Count OK: {'✅' if compat['token_count_reasonable'] else '❌'}")

    # Errors
    if report['errors']:
        print(f"\nErrors ({len(report['errors'])}):")
        for error in report['errors'][:10]:  # Show first 10 errors
            print(f"  ❌ {error}")
        if len(report['errors']) > 10:
            print(f"  ... and {len(report['errors']) - 10} more errors")

    # Warnings
    if report['warnings']:
        print(f"\nWarnings ({len(report['warnings'])}):")
        for warning in report['warnings'][:5]:  # Show first 5 warnings
            print(f"  ⚠️  {warning}")
        if len(report['warnings']) > 5:
            print(f"  ... and {len(report['warnings']) - 5} more warnings")

    # Save detailed report
    report_path = 'docs/taskmaster/logs/validation_report.json'
    os.makedirs(os.path.dirname(report_path), exist_ok=True)
    with open(report_path, 'w') as f:
        json.dump(report, f, indent=2)

    print(f"\nDetailed report saved to: {report_path}")

    # Exit with appropriate code
    sys.exit(0 if is_valid else 1)

if __name__ == "__main__":
    main()
