def generate_insight(request):
    metrics = request.metrics
    total_revenue = metrics.get("totalRevenue", 0)
    total_transactions = metrics.get("totalTransactions", 0)

    # Simple explanation logic
    explanation = f"Revenue of {total_revenue} across {total_transactions} transactions indicates " \
                  f"{'high' if total_revenue > 10000 else 'moderate'} sales performance."

    return {
        "message": f"Revenue is {total_revenue} across {total_transactions} transactions.",
        "confidence": 0.95,  # static for now, could be dynamic
        "explanation": explanation
    }
