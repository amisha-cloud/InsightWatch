from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter(prefix="/competitors", tags=["Competitors"])

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3"

@router.post("/")
async def compare_competitors(data: dict):
    try:
        prompt = f"Compare competitor influencer strategies using this data: {data}"
        async with httpx.AsyncClient() as client:
            response = await client.post(OLLAMA_URL, json={"model": MODEL, "prompt": prompt, "stream": False})
            return {"comparison": response.json()["response"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
