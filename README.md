# SafeStart Canada

SafeStart Canada is a responsive full-stack web application that helps newcomers to Canada quickly find practical guidance for healthcare, housing, legal rights, community support, jobs, banking, documents, and emergency situations.

The project was implemented from a Figma design as a polished portfolio application for demonstrating product thinking, React development, responsive UI architecture, backend API design, and user-centered interface design.

Original design reference: [Create this design on Figma](https://www.figma.com/design/zBB8WaVozuvk22BtO2oYaB/Create-this-design)

## Problem Statement

Newcomers often need to make important decisions before they fully understand Canadian systems. Tasks like applying for a health card, finding housing, understanding tenant rights, opening a bank account, or knowing when to call emergency services can be stressful and confusing.

SafeStart Canada organizes these topics into clear, action-oriented pages so users can find relevant information, explore local-style resources, and understand next steps in a calm and accessible interface.

## Key Features

- **Home dashboard** with emergency quick actions, support cards, category navigation, and feed-style resource sections
- **Category pages** with topic-specific article lists for healthcare, housing, legal rights, culture, jobs, banking, documents, mental health, settlement support, and community support
- **Article pages** with structured guidance, step-by-step instructions, checklists, required documents, warnings, tips, and resource links
- **Smart assistant prototype** with suggested questions, simulated responses, typing state, and linked resources
- **Live chat prototype** with mock community messages, chat room switching, message input, and verified role badges
- **Community groups page** with location-based and topic-based group cards, member counts, tags, and event previews
- **Resource finder page** with searchable and filterable mock resources for clinics, hospitals, legal services, food banks, libraries, support centers, and settlement agencies
- **FastAPI backend** with sample in-memory categories, resources, posts, recommended posts, and health-check endpoints
- **Frontend/backend integration** for Explore posts, For You recommendations, resource listings, and category-related resources
- **Graceful fallback behavior** so key pages continue showing local sample data if the backend is unavailable
- **Profile page** with profile preferences, saved articles, saved resources, checklist progress, settings, and emergency contact sections
- **Responsive navigation** with desktop links, mobile menu, active route styling, and language selector UI
- **Shared layout** with consistent navigation, footer, scroll reset behavior, and accessible page structure

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite 6**
- **React Router 7**
- **Tailwind CSS 4**
- **Radix UI / shadcn-style component primitives**
- **Lucide React icons**
- **FastAPI**
- **Uvicorn**
- **Pydantic**

## Screenshots

Add project screenshots here before publishing the repository.

Recommended screenshots:

- Home dashboard
- Smart assistant
- Resource finder
- Live chat
- Mobile navigation

Example Markdown format:

```md
![SafeStart Canada home dashboard](./screenshots/home-dashboard.png)
```

## Live Demo

Live demo: `Coming soon`

Suggested deployment options:

- Vercel
- Netlify
- GitHub Pages with a Vite static build

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd <your-repository-folder>
```

Install frontend dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run Locally

Start the backend API:

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Start the frontend development server from the project root:

```bash
npm run dev
```

If you need to bind explicitly to localhost:

```bash
npm run dev -- --host 127.0.0.1
```

Create a production build:

```bash
npm run build
```

Local URLs:

```text
Frontend: http://127.0.0.1:5173
Backend:  http://127.0.0.1:8000
API docs: http://127.0.0.1:8000/docs
```

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── postcss.config.mjs
├── backend
│   ├── requirements.txt
│   ├── README.md
│   └── app
│       ├── main.py
│       ├── schemas.py
│       ├── sample_data.py
│       └── routes
│           ├── health.py
│           ├── categories.py
│           ├── resources.py
│           └── posts.py
├── src
│   ├── main.tsx
│   ├── app
│   │   ├── App.tsx
│   │   ├── routes.ts
│   │   ├── lib
│   │   │   └── api.ts
│   │   ├── components
│   │   │   ├── Navigation.tsx
│   │   │   ├── RootLayout.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   ├── figma
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   └── ui
│   │   └── pages
│   │       ├── HomePage.tsx
│   │       ├── CategoryPage.tsx
│   │       ├── ArticlePage.tsx
│   │       ├── SmartAssistantPage.tsx
│   │       ├── LiveChatPage.tsx
│   │       ├── CommunityGroupsPage.tsx
│   │       ├── ResourceFinderPage.tsx
│   │       └── ProfilePage.tsx
│   ├── imports
│   └── styles
│       ├── index.css
│       ├── tailwind.css
│       ├── theme.css
│       ├── fonts.css
│       └── globals.css
└── README.md
```

## Important Pages and Components

| File | Purpose |
| --- | --- |
| `src/app/routes.ts` | Defines the route map with `createBrowserRouter` |
| `src/app/components/RootLayout.tsx` | Provides the shared page shell, navigation, footer, and scroll reset |
| `src/app/components/Navigation.tsx` | Handles top navigation, active route styles, mobile menu, and language selector UI |
| `src/app/lib/api.ts` | Centralized frontend API helper for FastAPI requests |
| `src/app/pages/HomePage.tsx` | Main dashboard with emergency actions, support categories, and content sections |
| `src/app/pages/CategoryPage.tsx` | Dynamic category page driven by the `categoryId` route parameter |
| `src/app/pages/ArticlePage.tsx` | Dynamic guide page driven by the `articleId` route parameter |
| `src/app/pages/SmartAssistantPage.tsx` | Simulated assistant interface with canned guidance responses |
| `src/app/pages/LiveChatPage.tsx` | Mock live chat interface with rooms, role badges, and message state |
| `src/app/pages/ResourceFinderPage.tsx` | Searchable/filterable resource directory using mock data |
| `src/app/pages/ProfilePage.tsx` | Profile, saved items, checklist, settings, and emergency contact UI |
| `src/styles/theme.css` | Theme tokens, base typography, dark-mode variables, and Tailwind theme mapping |
| `backend/app/main.py` | FastAPI application setup, CORS configuration, and router registration |
| `backend/app/sample_data.py` | In-memory sample data for categories, resources, and posts |
| `backend/app/schemas.py` | Pydantic response schema for shared API item shape |
| `backend/app/routes/` | Backend route modules for health, categories, resources, and posts |

## Routes

| Route | Page |
| --- | --- |
| `/` | Home dashboard |
| `/category/:categoryId` | Category detail page |
| `/article/:articleId` | Article / guide page |
| `/assistant` | Smart assistant |
| `/chat` | Live chat prototype |
| `/community` | Community groups |
| `/resources` | Resource finder |
| `/profile` | User profile |

## API Endpoints

The backend runs locally at `http://127.0.0.1:8000`.

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/health` | Health check |
| GET | `/categories` | List supported categories |
| GET | `/resources` | List sample resources |
| GET | `/resources/{category}` | List resources for one category |
| GET | `/posts` | List sample posts |
| GET | `/posts/recommended` | List recommended or urgent posts |

Current backend categories:

- `healthcare`
- `housing`
- `legal-rights`
- `mental-health`
- `settlement-worker`
- `community-support`

## Technical Highlights

- Built a multi-page React application with nested routing and a reusable root layout.
- Used route parameters to render dynamic category and article pages from structured local data.
- Added a FastAPI backend with modular route files, Pydantic schemas, CORS support, and in-memory sample data.
- Connected frontend pages to backend endpoints through a centralized API helper.
- Preserved frontend resilience with fallback sample data when backend requests fail.
- Implemented interactive UI state for assistant messages, chat messages, resource filters, profile tabs, language selection, and mobile navigation.
- Designed a consistent visual system with Tailwind utility classes, semantic spacing, accessible contrast, and reusable UI primitives.
- Organized the interface around real user tasks instead of generic marketing sections.
- Preserved clear implementation boundaries: this is a prototype using sample data, not a production service.

## What I Learned

- How to translate a product-oriented Figma concept into a working React application.
- How to structure route-driven pages for a realistic multi-screen experience.
- How to add a small backend safely without rewriting the frontend.
- How to connect React pages to a local API while preserving fallback UI behavior.
- How to communicate project scope clearly for technical reviewers.
- How to balance visual polish with practical information architecture.
- How to build UI flows that are supportive, readable, and accessible for users under stress.

## Current Scope

This project is a full-stack prototype. The frontend is connected to a local FastAPI backend for posts, recommended posts, resources, and category-related resources. The backend currently uses sample in-memory data.

It does not currently include:

- Authentication
- Database persistence
- Real chat infrastructure
- Real map/geolocation integration
- Live translation services
- Verified real-world service data

## Future Improvements

- Add authentication and persistent user profiles.
- Connect the resource finder to a real services database or public API.
- Replace in-memory backend data with a database.
- Add backend tests and frontend integration tests.
- Integrate map and geolocation functionality for nearby services.
- Replace simulated assistant responses with a secure, source-grounded assistant workflow.
- Add real-time chat using a backend service.
- Add automated tests for routing, filters, and key UI interactions.
- Add internationalization support for full-page translations.
- Deploy the application and add production screenshots to this README.
