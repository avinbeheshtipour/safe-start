from fastapi import APIRouter

from app.sample_data import CATEGORIES

router = APIRouter(tags=["categories"])


@router.get("/categories", response_model=list[str])
def get_categories() -> list[str]:
    return CATEGORIES
