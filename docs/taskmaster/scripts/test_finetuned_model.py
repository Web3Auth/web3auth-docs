#!/usr/bin/env python3
"""
Fine-tuned Model Testing Script
Web3Auth Documentation Project
"""

import os
import json
from datetime import datetime
from openai import OpenAI

class ModelTester:
    def __init__(self, model_id):
        self.client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
        self.model_id = model_id
        self.test_cases = [
            {
                "name": "Basic JavaScript SDK Initialization",
                "query": "How do I initialize the Web3Auth SDK in a JavaScript application?",
                "expected_keywords": ["Web3Auth", "clientId", "init", "import", "WEB3AUTH_NETWORK"]
            },
            {
                "name": "React Integration",
                "query": "How do I set up Web3Auth in a React application?",
                "expected_keywords": ["Web3AuthProvider", "useWeb3Auth", "React", "hooks", "connect"]
            },
            {
                "name": "Android Implementation",
                "query": "How do I initialize Web3Auth in an Android app?",
                "expected_keywords": ["Kotlin", "Web3AuthOptions", "LoginParams", "Android", "redirectUrl"]
            },
            {
                "name": "Blockchain Connection",
                "query": "How do I connect to Ethereum blockchain after Web3Auth login?",
                "expected_keywords": ["ethers", "provider", "signer", "getAddress", "sendTransaction"]
            },
            {
                "name": "Multi-Factor Authentication",
                "query": "How do I set up MFA with Web3Auth?",
                "expected_keywords": ["MFA_LEVELS", "enableMFA", "MANDATORY", "backup factors"]
            },
            {
                "name": "Smart Accounts",
                "query": "How do I set up Smart Accounts with Web3Auth?",
                "expected_keywords": ["AccountAbstractionProvider", "gasless", "Smart Account", "paymaster"]
            },
            {
                "name": "Troubleshooting",
                "query": "How do I fix Vite bundler issues with Web3Auth?",
                "expected_keywords": ["vite.config", "buffer", "polyfills", "global", "process"]
            }
        ]

    def test_model_response(self, query, expected_keywords):
        """Test the model with a specific query"""
        try:
            response = self.client.chat.completions.create(
                model=self.model_id,
                messages=[
                    {
                        "role": "system",
                        "content": "You are a Web3Auth integration expert assistant. You help developers integrate Web3Auth authentication into their applications across multiple platforms including Web, React, Vue, Android, iOS, Flutter, Unity, and Unreal Engine. You provide accurate, complete code examples with proper imports, configuration, and best practices."
                    },
                    {
                        "role": "user",
                        "content": query
                    }
                ],
                max_tokens=1000,
                temperature=0.1
            )

            content = response.choices[0].message.content

            # Check for expected keywords
            keyword_matches = []
            for keyword in expected_keywords:
                if keyword.lower() in content.lower():
                    keyword_matches.append(keyword)

            return {
                "success": True,
                "content": content,
                "keyword_matches": keyword_matches,
                "keyword_coverage": len(keyword_matches) / len(expected_keywords) * 100,
                "tokens_used": response.usage.total_tokens
            }

        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "content": None,
                "keyword_matches": [],
                "keyword_coverage": 0,
                "tokens_used": 0
            }

    def run_all_tests(self):
        """Run all test cases"""
        print(f"🧪 Testing Fine-tuned Model: {self.model_id}")
        print("=" * 70)

        results = []
        total_tokens = 0

        for i, test_case in enumerate(self.test_cases, 1):
            print(f"\n📋 Test {i}/{len(self.test_cases)}: {test_case['name']}")
            print("-" * 50)

            result = self.test_model_response(test_case['query'], test_case['expected_keywords'])

            if result['success']:
                coverage = result['keyword_coverage']
                status = "✅ PASS" if coverage >= 60 else "⚠️ PARTIAL" if coverage >= 30 else "❌ FAIL"

                print(f"Status: {status}")
                print(f"Keyword Coverage: {coverage:.1f}% ({len(result['keyword_matches'])}/{len(test_case['expected_keywords'])})")
                print(f"Tokens Used: {result['tokens_used']}")
                print(f"Matched Keywords: {', '.join(result['keyword_matches'])}")

                # Show first 200 characters of response
                preview = result['content'][:200] + "..." if len(result['content']) > 200 else result['content']
                print(f"Response Preview: {preview}")

                total_tokens += result['tokens_used']
            else:
                print(f"❌ ERROR: {result['error']}")

            results.append({
                "test_name": test_case['name'],
                "query": test_case['query'],
                "result": result
            })

        # Summary
        print("\n" + "=" * 70)
        print("📊 TEST SUMMARY")
        print("=" * 70)

        successful_tests = [r for r in results if r['result']['success']]
        passed_tests = [r for r in successful_tests if r['result']['keyword_coverage'] >= 60]

        print(f"Total Tests: {len(results)}")
        print(f"Successful: {len(successful_tests)}")
        print(f"Passed (≥60% coverage): {len(passed_tests)}")
        print(f"Total Tokens Used: {total_tokens}")

        if successful_tests:
            avg_coverage = sum(r['result']['keyword_coverage'] for r in successful_tests) / len(successful_tests)
            print(f"Average Keyword Coverage: {avg_coverage:.1f}%")

        # Save results
        self.save_test_results(results, total_tokens)

        return results

    def save_test_results(self, results, total_tokens):
        """Save test results to file"""
        report = {
            "model_id": self.model_id,
            "test_timestamp": datetime.now().isoformat(),
            "total_tests": len(results),
            "successful_tests": len([r for r in results if r['result']['success']]),
            "total_tokens_used": total_tokens,
            "test_results": results
        }

        os.makedirs("docs/taskmaster/logs", exist_ok=True)
        with open("docs/taskmaster/logs/model_test_results.json", "w") as f:
            json.dump(report, f, indent=2)

        print(f"\n💾 Test results saved to: docs/taskmaster/logs/model_test_results.json")

def main():
    if not os.getenv('OPENAI_API_KEY'):
        print("❌ OpenAI API key not found. Set OPENAI_API_KEY environment variable.")
        return

    # You'll need to update this with your actual fine-tuned model ID
    model_id = input("Enter your fine-tuned model ID: ").strip()

    if not model_id:
        print("❌ Model ID required")
        return

    tester = ModelTester(model_id)
    results = tester.run_all_tests()

    print("\n🎉 Testing complete!")

if __name__ == "__main__":
    main()
