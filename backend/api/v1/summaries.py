from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter(prefix="/summaries", tags=["Summaries"])

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3"

@router.post("/")
async def summarize_data(data: dict):
    try:
        prompt = f"Summarize influencer performance based on this data: {data}"
        async with httpx.AsyncClient() as client:
            response = await client.post(OLLAMA_URL, json={"model": MODEL, "prompt": prompt, "stream": False})
            return {"summary": response.json()["response"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
