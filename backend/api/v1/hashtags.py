from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter(prefix="/hashtags", tags=["Hashtags"])

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3"

@router.post("/")
async def recommend_hashtags(content: str):
    try:
        prompt = f"Suggest high-performing hashtags based on this content: {content}"
        async with httpx.AsyncClient() as client:
            response = await client.post(OLLAMA_URL, json={"model": MODEL, "prompt": prompt, "stream": False})
            return {"hashtags": response.json()["response"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
