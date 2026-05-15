from fastapi import APIRouter

from app.sample_data import RESOURCES
from app.schemas import SafeStartItem

router = APIRouter(tags=["resources"])


@router.get("/resources", response_model=list[SafeStartItem])
def get_resources() -> list[dict]:
    return RESOURCES


@router.get("/resources/{category}", response_model=list[SafeStartItem])
def get_resources_by_category(category: str) -> list[dict]:
    return [resource for resource in RESOURCES if resource["category"] == category]
