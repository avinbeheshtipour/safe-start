from fastapi import APIRouter

from app.sample_data import POSTS
from app.schemas import SafeStartItem

router = APIRouter(tags=["posts"])


@router.get("/posts", response_model=list[SafeStartItem])
def get_posts() -> list[dict]:
    return POSTS


@router.get("/posts/recommended", response_model=list[SafeStartItem])
def get_recommended_posts() -> list[dict]:
    return [post for post in POSTS if post["urgent"] or "recommended" in post["tags"]]
