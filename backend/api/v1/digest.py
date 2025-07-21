from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter(prefix="/digest", tags=["Digest"])

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3"

@router.post("/")
async def weekly_digest(data: dict):
    try:
        prompt = f"Create a weekly influencer activity digest for brand managers based on: {data}"
        async with httpx.AsyncClient() as client:
            response = await client.post(OLLAMA_URL, json={"model": MODEL, "prompt": prompt, "stream": False})
            return {"digest": response.json()["response"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
