from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter(prefix="/insights", tags=["Insights"])

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3"

@router.post("/")
async def generate_insights(data: dict):
    try:
        prompt = f"Generate insights based on this influencer data: {data}"
        async with httpx.AsyncClient() as client:
            response = await client.post(OLLAMA_URL, json={"model": MODEL, "prompt": prompt, "stream": False})
            return {"insights": response.json()["response"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
