# SafeStart Canada Backend

This is the first small backend step for SafeStart Canada. It is a simple FastAPI service with sample in-memory data only. It does not use a database and is not connected to the frontend yet.

## Setup

From the project root, move into the backend folder:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python3 -m venv .venv
```

Activate the virtual environment:

```bash
source .venv/bin/activate
```

Install requirements:

```bash
pip install -r requirements.txt
```

## Run the Backend

Start the FastAPI development server:

```bash
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

The API will be available at:

```text
http://127.0.0.1:8000
```

Interactive API docs:

```text
http://127.0.0.1:8000/docs
```

## Test Endpoints

Use a browser, the interactive docs, or `curl`.

```bash
curl http://127.0.0.1:8000/health
curl http://127.0.0.1:8000/categories
curl http://127.0.0.1:8000/resources
curl http://127.0.0.1:8000/resources/healthcare
curl http://127.0.0.1:8000/posts
curl http://127.0.0.1:8000/posts/recommended
```

## Available Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/health` | Health check |
| GET | `/categories` | List supported categories |
| GET | `/resources` | List all sample resources |
| GET | `/resources/{category}` | List resources by category |
| GET | `/posts` | List all sample posts |
| GET | `/posts/recommended` | List recommended or urgent posts |

## Notes

- Data is stored in `app/sample_data.py`.
- Response shape is defined in `app/schemas.py`.
- CORS is enabled for the Vite frontend at `http://localhost:5173` and `http://127.0.0.1:5173`.
- This backend is intentionally small and does not include authentication, persistence, or external APIs yet.
