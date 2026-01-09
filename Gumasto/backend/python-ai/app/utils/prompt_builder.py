def build_insight_prompt(metrics: dict) -> str:
    return f"""
You are a retail business analyst AI.

Given the following metrics, generate a short business insight.
You are a retail analytics AI.

Store ID: {req.store_id}
Total Revenue: {req.metrics.totalRevenue}
Total Transactions: {req.metrics.totalTransactions}

Respond ONLY in valid JSON:
{{
  "insight": {{
    "message": "...",
    "confidence": 0.0,
    "explanation": "..."
  }}
}}

Rules:
- Be concise
- Use plain English
- No bullet points
- No emojis
- Maximum 3 sentences
"""
