from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import requests
import json
import re

app = FastAPI()

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3"


# --------- SCHEMAS ---------

class Metrics(BaseModel):
    totalRevenue: float
    totalTransactions: int


class InsightRequest(BaseModel):
    store_id: str
    metrics: Metrics
    start_date: Optional[str] = None
    end_date: Optional[str] = None


# --------- HELPERS ---------

def extract_json(text: str):
    match = re.search(r"\{[\s\S]*\}", text)
    if not match:
        raise ValueError("No JSON found in LLM response")
    return json.loads(match.group())


# --------- ROUTE ---------

@app.post("/ai/insight")
def generate_insight(req: InsightRequest):

    prompt = f"""
You are a retail analytics AI.

Store ID: {req.store_id}
Total Revenue: {req.metrics.totalRevenue}
Total Transactions: {req.metrics.totalTransactions}

Respond ONLY in valid JSON like this:
{{
  "insight": {{
    "message": "...",
    "confidence": 0.0,
    "explanation": "..."
  }}
}}
"""

    try:
        response = requests.post(
            OLLAMA_URL,
            json={
                "model": MODEL,
                "prompt": prompt,
                "stream": False
            },
            timeout=60
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ollama not reachable: {e}")

    try:
        ollama_json = response.json()
    except Exception:
        raise HTTPException(status_code=500, detail="Invalid JSON from Ollama")

    if "response" not in ollama_json:
        raise HTTPException(status_code=500, detail=f"Ollama error: {ollama_json}")

    raw_text = ollama_json["response"]

    try:
        return extract_json(raw_text)
    except Exception:
        return {
            "insight": {
                "message": "AI response could not be parsed",
                "confidence": 0.0,
                "explanation": raw_text
            }
        }
