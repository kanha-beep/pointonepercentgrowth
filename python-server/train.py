import json
from pathlib import Path
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
BASE_DIR=Path(__file__).resolve().parent
DATA_PATH=BASE_DIR / "data" / "intents.json"
MODEL_DIR = BASE_DIR / "models"
MODEL_PATH = MODEL_DIR / "chatbot.joblib"
def train():
    with DATA_PATH.open("r", encoding="utf-8") as file:
        data = json.load(file)
    questions=[]
    labels=[]
    responses={}
    for intent in data["intents"]:
        tag = intent["tag"]
        responses[tag] = intent["response"]
        for question in intent["patterns"]:
            questions.append(question)
            labels.append(tag)
    x_train, x_test, y_train, y_test = train_test_split(questions, labels, test_size=0.25, random_state=42, stratify=labels)
    # convert text into numbers
    model = Pipeline([
        (
            "tfidf", TfidfVectorizer(lowercase=True, ngram_range=(1,2))
        ),
        (
            "classifier",
            LogisticRegression(max_iter=1000),
        )
    ])
    model.fit(x_train, y_train)
    predictions = model.predict(x_test)
    print(f"Test accuracy: {accuracy_score(y_test, predictions):.2%}")
    print(classification_report(y_test, predictions, zero_division=0))
    # after evaluation train the model on all examples
    model.fit(questions, labels)
    MODEL_DIR.mkdir(parents=True, exist_ok=True)
    #save the text convertor, classifier and the answer together
    joblib.dump(
        {
            "model":model,
            "responses":responses
        },
        MODEL_PATH,
    )
    print(f"Trained with {len(questions)} quesitons.")
    print(f"Saved model to: {MODEL_PATH}")

if __name__ == "__main__":
    train()