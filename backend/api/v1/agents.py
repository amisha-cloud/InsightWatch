from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter(prefix="/agents", tags=["Agents"])

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3"

# Fake agent list for frontend UI
@router.get("/")
async def list_agents():
    return [
        {
            "id": 1,
            "name": "Influencer Analyzer",
            "description": "Analyzes social media influencers and provides performance insights.",
            "status": "Active"
        },
        {
            "id": 2,
            "name": "Trend Detector",
            "description": "Identifies trending topics relevant to your niche.",
            "status": "Active"
        },
        {
            "id": 3,
            "name": "Competitor Watch",
            "description": "Monitors competitor campaigns and summaries their strategies.",
            "status": "Beta"
        }
    ]

@router.post("/")
async def analyze_agents(agent_data: dict):
    try:
        prompt = f"Analyze the following influencer agent data and give a summary: {agent_data}"
        async with httpx.AsyncClient() as client:
            response = await client.post(OLLAMA_URL, json={
                "model": MODEL,
                "prompt": prompt,
                "stream": False
            })
            return {"summary": response.json()["response"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
