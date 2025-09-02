from flask import Flask, render_template, request
import pickle
import pandas as pd
from src.preprocessing import preprocess_input

app = Flask(__name__)

# Load trained model
model = pickle.load(open("models/trained_model.pkl", "rb"))

@app.route("/", methods=["GET", "POST"])
def index():
    prediction = None
    if request.method == "POST":
        text_input = request.form.get("text_input")
        num_input = float(request.form.get("num_input"))

        # Preprocess input
        X = preprocess_input(text_input, num_input)

        # Predict
        prediction = model.predict(X)[0]

    return render_template("index.html", prediction=prediction)

if __name__ == "__main__":
    app.run(debug=True)
