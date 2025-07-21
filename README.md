 InsightWatch

AI-powered Influencer & Competitor Monitoring Dashboard  
Built with **React (Vite)** + **Tailwind CSS** + **FastAPI** + **Ollama (LLMs)**

---

 Live Demo

🔗 Frontend: [https://ai-agent-nu-nine.vercel.app/](https://ai-agent-nu-nine.vercel.app/)  
⚙️ Backend: Local API with FastAPI + Ollama

---

## ⚙️ Tech Stack

- **Frontend**: React, Tailwind CSS, Vite, Lucide Icons, Framer Motion  
- **Backend**: FastAPI + Python  
- **LLM Runtime**: [Ollama](https://ollama.com/) (supports models like `llama3`, `mistral`, etc.)  
- **Future**: MongoDB, LangChain, OpenAI API

---

## 🧠 Features

- 🔍 Track influencers & competitors  
- 📊 Sentiment monitoring  
- ⚡️ Fast UI with animations  
- 🧠 LLM-powered insights (via Ollama)  
- 🔐 Backend API with FastAPI

---

## 🛠️ Getting Started

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
Backend (FastAPI + Ollama)
Ensure Ollama is installed and a model is pulled (e.g., ollama run llama3)


cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
 Ollama Setup (LLM)
Install Ollama from https://ollama.com
Run a model locally (example with LLaMA3):


ollama pull llama3
ollama run llama3
Make sure it's accessible at http://localhost:11434 for FastAPI.

📁 Project Structure
bash
Copy
Edit
InsightWatch/
├── frontend/    # React dashboard
├── backend/     # FastAPI + Ollama LLM API
├── README.md
📄 License
