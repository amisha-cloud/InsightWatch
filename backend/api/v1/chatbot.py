from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter(prefix="/chatbot", tags=["Chatbot"])

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3"

@router.post("/ask")
async def ask_question(query: str):
    try:
        prompt = f"You are an expert social media AI. Answer this: {query}"
        async with httpx.AsyncClient() as client:
            response = await client.post(OLLAMA_URL, json={"model": MODEL, "prompt": prompt, "stream": False})
            return {"response": response.json()["response"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
