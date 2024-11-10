curl -X POST "https://api.vectorshift.ai/api/pipelines/run" \
  -H "Api-Key: YOUR_API_KEY" \
  -d '{
    "inputs": "{\"Name\": \"YOUR_INPUT_VALUE\", \"Inquiry\": \"YOUR_INPUT_VALUE\", \"Email\": \"YOUR_INPUT_VALUE\"}",
    "pipeline_name": "LLM project",
    "username": "atisha",
  }'
