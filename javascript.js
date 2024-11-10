
const url = "https://api.vectorshift.ai/api/pipelines/run";
const headers = {
  "Api-Key": "YOUR_API_KEY",
};

const data = new FormData();
data.append("pipeline_name", "LLM project");
data.append("username", "atisha");

// String inputs, or JSON representations of files for File inputs
data.append("Name", YOUR_INPUT_VALUE);
data.append("Inquiry", YOUR_INPUT_VALUE);
data.append("Email", YOUR_INPUT_VALUE);

fetch(url, {
  method: 'POST',
  headers: headers,
  body: data,
})
.then(response => response.json());