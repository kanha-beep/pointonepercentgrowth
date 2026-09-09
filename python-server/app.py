from fastapi import FastAPI
app = FastAPI()
@app.post("/chatbot")
async def ask_ques(data:Dict):
    print("data in chatbot: ", data)
    