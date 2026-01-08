from fastapi import FastAPI
from app.routes import ai_routes

app = FastAPI(title="Python AI Service")

# Health check
@app.get("/health")
async def health():
    return {"status": "ok"}

# Include AI routes
app.include_router(ai_routes.router, prefix="/ai")
