NotebookLM Clone – PDF Chat Application
A full-stack AI-powered document chat app inspired by Google’s NotebookLM. Upload a PDF, ask questions about it, and get contextual answers with page references and inline citations.

Installation

1. Clone the repository

git clone https://github.com/your-username/notebooklm-clone.git
cd notebooklm-clone

2. Frontend Setup

cd client
npm install

3. Backend Setup

cd ../server
npm install

If you’re using a local LLM, ensure Ollama or Llama.cpp is properly configured and running.

Usage

1. Start the Backend Server

cd server
npm run dev
Make sure it runs on port 5000 (or update frontend proxy config).

2. Start the Frontend Dev Server

cd client
npm run dev
