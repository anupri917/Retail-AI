from pydantic import BaseModel
from typing import List, Dict, Any

class InsightRequest(BaseModel):
    store_id: str
    product_ids: List[str]
    start_date: str
    end_date: str
    metrics: Dict[str, Any]   
