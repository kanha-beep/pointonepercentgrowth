from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from chatbot import get_reply

app = FastAPI(title="Point One Percent Growth Chatbot API")

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatQuery(BaseModel):
    message: str

@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "pointonepercentgrowth-chatbot"}

@app.post("/chatbot")
async def ask_ques(query: ChatQuery):
    if not query.message:
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    result = get_reply(query.message)
    return result