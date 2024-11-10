import json
import requests

url = "https://api.vectorshift.ai/api/pipelines/run"

headers = {
    "Api-Key": "YOUR_API_KEY",
}

data = {
    # String inputs, or JSON representations of files for File inputs
    "inputs": json.dumps({
        "Name": YOUR_INPUT_VALUE,
		"Inquiry": YOUR_INPUT_VALUE,
		"Email": YOUR_INPUT_VALUE
  }),
    "pipeline_name": "LLM project",
    "username": "atisha",
}

response = requests.post(url, headers=headers, data=data)
response = response.json()