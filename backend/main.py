from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.v1 import agents, insights, digest, competitors, hashtags, summaries, chatbot

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(agents.router)
app.include_router(insights.router)
app.include_router(digest.router)
app.include_router(competitors.router)
app.include_router(hashtags.router)
app.include_router(summaries.router)
app.include_router(chatbot.router)

@app.get("/")
def root():
    return {"message": "InsightWatch Backend with Ollama is running!"}
