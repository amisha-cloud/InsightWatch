import requests
import os
from dotenv import load_dotenv

# Load API URL
load_dotenv()

OLLAMA_API = os.getenv("OLLAMA_API")

def get_ollama_summary(content: str, model: str = "llama3") -> str:
    """Send a prompt to Ollama and get the response"""
    response = requests.post(
        f"{OLLAMA_API}/api/generate",
        json={
            "model": model,
            "prompt": f"Summarize the following influencer post:\n\n{content}"
        }
    )
    return response.json()["response"].strip()
