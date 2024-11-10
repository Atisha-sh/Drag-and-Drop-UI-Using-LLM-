API Pipeline Runner:

This repository contains scripts for running a pipeline via the Vectorshift API in different languages. Each script provides a simple way to execute the API pipeline with specified inputs.

Files:

curl.sh: A shell script using curl to make a POST request to the API.
javascript.js: A JavaScript script that utilizes the fetch API to send a POST request.
python.py: A Python script to interact with the API (script details to be added here if needed).
Setup
Clone this repository:

bash

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Open each script file and replace the placeholder values for API key and input fields.

Replace YOUR_API_KEY with your actual API key.
Replace YOUR_INPUT_VALUE with the specific values for Name, Inquiry, and Email as required by the API.
Usage
Shell Script (curl.sh)
Make the script executable:

bash

chmod +x curl.sh
Run the script:

bash

./curl.sh
JavaScript Script (javascript.js)
Include the script in your Node.js environment or web project.

Ensure that you replace the placeholder values before executing.

Run the script:

javascript

node javascript.js
Python Script (python.py)
Install any dependencies if required.

Execute the script:

bash

python python.py
Notes
Each script is structured to send a POST request to https://api.vectorshift.ai/api/pipelines/run.
Ensure that the API key and input values are correctly set before running any of the scripts.
