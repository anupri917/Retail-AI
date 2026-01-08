from fastapi import APIRouter
from app.schemas.request_models import InsightRequest
from app.services.insight_engine import generate_insight

router = APIRouter()

@router.post("/insight")
async def insight_endpoint(request: InsightRequest):
    """
    Skeleton endpoint for generating insights
    """
    result = generate_insight(request)
    return {"insight": result}
