import pandas as pd
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

# Load data
text_data = pd.read_csv("data/text_data.csv")
financial_data = pd.read_csv("data/financial_data.csv")

# Merge data for simplicity
data = pd.merge(text_data, financial_data, on="id")

# Features & labels
X = data[["text", "feature1", "feature2", "feature3"]]
y = data["label_x"]

# Define pipelines
text_pipeline = Pipeline([
    ("tfidf", TfidfVectorizer())
])

num_pipeline = Pipeline([
    ("scaler", StandardScaler())
])

preprocessor = ColumnTransformer([
    ("text", text_pipeline, "text"),
    ("num", num_pipeline, ["feature1", "feature2", "feature3"])
])

# Model pipeline
pipeline = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", LogisticRegression())
])

# Train model
pipeline.fit(X, y)

# Save model
with open("models/trained_model.pkl", "wb") as f:
    pickle.dump(pipeline, f)

print("Model trained and saved!")
