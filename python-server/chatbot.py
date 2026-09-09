from pathlib import Path
import joblib

BASE_DIR  = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "models" / "chatbot.joblib"
if not MODEL_PATH.exists():
    raise FileNotFoundError("Chatbot model not found")
# Load once when this model starts
saved_data = joblib.load(MODEL_PATH)
model = saved_data["model"]
responses = saved_data["responses"]
CONFIDENCE_THRESHOLD = 0.25
FALLBACK_REPLY = (
    "I'm not sure about that. Could you ask about our "
    "website packages, services, office hours, or contact details?"
)
def get_reply(message: str) -> dict:
    message = message.strip()
    if not message:
        return {
            "reply": "Please type a question",
            "intent":"fallback",
            "confidence":0.0
        }
    # Detect messages containing no words
    features = model.named_steps["tfidf"].transform([message])
    if features.nnz == 0:
        return {
            "reply":FALLBACK_REPLY,
            "intent":"fallback",
            "confidence":0.0,
        }
    probabilities = model.predict_proba([message])[0]
    best_index = int(probabilities.argmax())
    confidence = float(probabilities[best_index])
    intent = str(model.classes_[best_index])
    if confidence < CONFIDENCE_THRESHOLD:
        return {
            "reply":FALLBACK_REPLY,
            "intent":"fallback",
            "confidence":round(confidence, 4)
        }
    return {
        "reply":responses[intent],
        "intent":intent,
        "confidence":round(confidence, 4)
    }
# Lets you test in the terminal before connecting FastAPI
if __name__ == "__main__":
    print("Chatbot ready")
    while True:
        message = input("\nYou: ")
        if message.strip().lower() == "exit":
            break
        result = get_reply(message)
        print("Bot: ", result["reply"])
        print(
            f"Intent: {result['intent']} | "
            f"Confidence: {result['confidence']:.2f}"
        )