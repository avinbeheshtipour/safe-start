from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import categories, health, posts, resources

app = FastAPI(
    title="SafeStart Canada API",
    description="Small FastAPI backend prototype for SafeStart Canada.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(categories.router)
app.include_router(resources.router)
app.include_router(posts.router)
