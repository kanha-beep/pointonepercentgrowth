# Python chatbot service

Install dependencies from `requirements.txt`, train the model with `python train.py`, then start the API with:

```powershell
uvicorn app:app --host 127.0.0.1 --port 8000
```

The Next.js API forwards chatbot messages to `PYTHON_CHATBOT_URL`. For a deployed website, deploy this FastAPI service separately and set that environment variable to its public `/chatbot` URL.
