# Web3Auth Fine-tuned Model Deployment Guide

## Overview

This guide covers how to deploy and use your fine-tuned Web3Auth expert model in production
applications.

## Model Information

- **Base Model**: gpt-4o-mini-2024-07-18
- **Fine-tuned For**: Web3Auth integration expertise
- **Training Data**: 11 high-quality examples covering all platforms
- **Platforms Covered**: Web, React, Vue, Android, iOS, Flutter, Unity, React Native
- **Features Covered**: Authentication, Blockchain integration, MFA, Smart Accounts, Troubleshooting

## Deployment Options

### 1. Direct OpenAI API Integration

```javascript
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini-2024-07-18:ft-your-org:web3auth-expert-v1:abc123",
  messages: [
    {
      role: "system",
      content:
        "You are a Web3Auth integration expert assistant. You help developers integrate Web3Auth authentication into their applications across multiple platforms including Web, React, Vue, Android, iOS, Flutter, Unity, and Unreal Engine. You provide accurate, complete code examples with proper imports, configuration, and best practices.",
    },
    {
      role: "user",
      content: "How do I initialize Web3Auth in React?",
    },
  ],
  max_tokens: 1000,
  temperature: 0.1,
});

console.log(response.choices[0].message.content);
```

### 2. Node.js Express API

```javascript
const express = require("express");
const OpenAI = require("openai");

const app = express();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

app.post("/api/web3auth-assistant", async (req, res) => {
  try {
    const { question } = req.body;

    const response = await openai.chat.completions.create({
      model: "YOUR_FINE_TUNED_MODEL_ID",
      messages: [
        {
          role: "system",
          content: "You are a Web3Auth integration expert assistant...",
        },
        {
          role: "user",
          content: question,
        },
      ],
      max_tokens: 1000,
      temperature: 0.1,
    });

    res.json({
      answer: response.choices[0].message.content,
      model: response.model,
      usage: response.usage,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Web3Auth Assistant API running on port 3000");
});
```

### 3. Next.js API Route

```javascript
// pages/api/web3auth-assistant.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { question } = req.body;

    const response = await openai.chat.completions.create({
      model: "YOUR_FINE_TUNED_MODEL_ID",
      messages: [
        {
          role: "system",
          content: "You are a Web3Auth integration expert assistant...",
        },
        {
          role: "user",
          content: question,
        },
      ],
      max_tokens: 1000,
      temperature: 0.1,
    });

    res.json({
      answer: response.choices[0].message.content,
      model: response.model,
      usage: response.usage,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

### 4. Python Flask API

```python
from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)
openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/api/web3auth-assistant', methods=['POST'])
def web3auth_assistant():
    try:
        data = request.json
        question = data.get('question')

        response = openai.chat.completions.create(
            model='YOUR_FINE_TUNED_MODEL_ID',
            messages=[
                {
                    'role': 'system',
                    'content': 'You are a Web3Auth integration expert assistant...'
                },
                {
                    'role': 'user',
                    'content': question
                }
            ],
            max_tokens=1000,
            temperature=0.1
        )

        return jsonify({
            'answer': response.choices[0].message.content,
            'model': response.model,
            'usage': response.usage
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
```

## Frontend Integration

### React Hook

```javascript
import { useState } from "react";

export const useWeb3AuthAssistant = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const askQuestion = async (question) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/web3auth-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { askQuestion, loading, response, error };
};
```

### Vue Composable

```javascript
import { ref } from "vue";

export function useWeb3AuthAssistant() {
  const loading = ref(false);
  const response = ref(null);
  const error = ref(null);

  const askQuestion = async (question) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await fetch("/api/web3auth-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      response.value = data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { askQuestion, loading, response, error };
}
```

## Best Practices

### 1. System Prompts

Always use the trained system prompt for best results:

```
You are a Web3Auth integration expert assistant. You help developers integrate Web3Auth authentication into their applications across multiple platforms including Web, React, Vue, Android, iOS, Flutter, Unity, and Unreal Engine. You provide accurate, complete code examples with proper imports, configuration, and best practices. You understand the nuances of different SDK platforms and can guide users through authentication flows, blockchain integration, troubleshooting, and advanced features like Custom Authentication and MFA.
```

### 2. Temperature Settings

- **Code Generation**: Use `temperature: 0.1` for consistent, accurate code
- **Explanations**: Use `temperature: 0.3` for more natural language
- **Creative Solutions**: Use `temperature: 0.5` for alternative approaches

### 3. Token Limits

- **Short Answers**: `max_tokens: 500`
- **Code Examples**: `max_tokens: 1000`
- **Detailed Guides**: `max_tokens: 1500`

### 4. Rate Limiting

Implement rate limiting to manage costs:

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP",
});

app.use("/api/web3auth-assistant", limiter);
```

## Cost Optimization

### 1. Caching Common Responses

```javascript
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 600 }); // 10 minute cache

app.post("/api/web3auth-assistant", async (req, res) => {
  const { question } = req.body;
  const cacheKey = `question:${Buffer.from(question).toString("base64")}`;

  // Check cache first
  const cached = cache.get(cacheKey);
  if (cached) {
    return res.json(cached);
  }

  // Generate response and cache it
  const response = await generateResponse(question);
  cache.set(cacheKey, response);
  res.json(response);
});
```

### 2. Request Batching

```javascript
const processBatch = async (questions) => {
  const responses = await Promise.all(questions.map((q) => generateResponse(q)));
  return responses;
};
```

## Monitoring and Analytics

### 1. Usage Tracking

```javascript
const trackUsage = (question, response, tokens) => {
  console.log({
    timestamp: new Date().toISOString(),
    question: question.substring(0, 100),
    tokens_used: tokens,
    response_length: response.length,
    model: "web3auth-expert-v1",
  });
};
```

### 2. Performance Monitoring

```javascript
const trackPerformance = (startTime, endTime) => {
  const duration = endTime - startTime;
  console.log(`Response time: ${duration}ms`);
};
```

## Security Considerations

1. **API Key Security**: Never expose your OpenAI API key in client-side code
2. **Input Validation**: Validate and sanitize all user inputs
3. **Rate Limiting**: Implement appropriate rate limiting
4. **Authentication**: Secure your API endpoints with proper authentication
5. **CORS**: Configure CORS policies appropriately

## Example Use Cases

1. **Developer Documentation**: Integrate into documentation sites
2. **IDE Extensions**: Create VS Code/JetBrains extensions
3. **Discord Bots**: Build community support bots
4. **Support Chatbots**: Integrate into customer support systems
5. **Training Tools**: Create interactive learning platforms

## Troubleshooting

### Common Issues

1. **Model Not Found**: Ensure your model ID is correct
2. **Rate Limits**: Implement proper rate limiting and error handling
3. **Token Limits**: Monitor and adjust max_tokens based on use case
4. **API Errors**: Implement proper error handling and retry logic

### Error Handling

```javascript
const handleAPIError = (error) => {
  if (error.response?.status === 429) {
    return { error: "Rate limit exceeded. Please try again later." };
  } else if (error.response?.status === 401) {
    return { error: "Invalid API key." };
  } else {
    return { error: "An unexpected error occurred." };
  }
};
```

## Support

For technical support and questions about your fine-tuned model:

1. Check the test results in `docs/taskmaster/logs/model_test_results.json`
2. Review the training data in `docs/taskmaster/phase2_training_data.jsonl`
3. Refer to the fine-tuning configuration in `docs/taskmaster/openai_finetuning_config.yaml`

Your fine-tuned model is now ready for production use!
