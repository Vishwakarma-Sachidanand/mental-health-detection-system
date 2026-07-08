# MindScope AI — Mental Health Prediction Frontend

A production-quality frontend for the **Mental Health Prediction Using Multimodal AI** Final Year Project. Built with React 19, Next.js App Router, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- **10 Pages**: Landing, About, Architecture, Datasets, AI Models, Live Prediction, Dashboard, Documentation, Team, Contact
- **Dark SaaS Theme** with glassmorphism, gradients, and Framer Motion animations
- **Multimodal Prediction UI** — Text, Voice, and Video tabs with drag-and-drop
- **Analytics Dashboard** — Pie, Bar, and Area charts with Recharts
- **API-Ready** — Axios services prepared for backend integration
- **Fully Responsive** — Desktop, tablet, and mobile layouts

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI library |
| Next.js 15 (App Router) | Framework & routing |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling |
| Shadcn UI | Component primitives |
| Framer Motion | Animations |
| Recharts | Data visualization |
| React Hook Form + Zod | Form validation |
| Axios | API client |
| React Dropzone | File uploads |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:8000/api` |
| `NEXT_PUBLIC_USE_MOCK_DATA` | Use dummy data (no API calls) | `true` |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── features/               # Page-specific modules
├── hooks/                  # Custom React hooks
├── services/               # Axios API services
├── types/                  # TypeScript definitions
├── constants/              # Static data & config
├── utils/                  # Utility functions
└── styles/                 # Global CSS
```

## API Integration

| Endpoint | Method | Service |
|----------|--------|---------|
| `/api/predict/multimodal` | POST | `predictMultimodal()` — **text + audio + video combined** |
| `/api/predict/text` | POST | `predictText()` (single modality) |
| `/api/predict/audio` | POST | `predictAudio()` (single modality) |
| `/api/predict/video` | POST | `predictVideo()` (single modality) |
| `/api/history` | GET | `getPredictionHistory()` |
| `/api/dashboard` | GET | `getDashboardData()` |
| `/api/contact` | POST | `submitContactForm()` |

By default `NEXT_PUBLIC_USE_MOCK_DATA=true` so no API calls are made until your backend is ready. Set it to `false` when connecting the real API.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

Deploy to Vercel and set `NEXT_PUBLIC_API_URL` to your backend API URL.

## License

Academic project — Final Year Project.
