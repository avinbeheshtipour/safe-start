from pydantic import BaseModel


class SafeStartItem(BaseModel):
    id: int
    title: str
    description: str
    category: str
    imageUrl: str
    location: str
    tags: list[str]
    urgent: bool
