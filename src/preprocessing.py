import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import StandardScaler
import numpy as np

# Load TF-IDF vectorizer globally for reuse
vectorizer = TfidfVectorizer()

def preprocess_input(text, num_input):
    # Convert text input to TF-IDF vector
    tfidf = vectorizer.fit_transform([text]).toarray()
    
    # Scale numeric input
    scaler = StandardScaler()
    num_scaled = scaler.fit_transform(np.array(num_input).reshape(-1, 1)).flatten()
    
    # Combine features
    X = np.hstack((tfidf, num_scaled.reshape(1, -1)))
    return X
