"use client";

import { PageTransition, SectionHeader } from "@/components/common/motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { GridBackground } from "@/components/common/animated-background";
import { Badge } from "@/components/ui/badge";
const sections = [
  {
    id: "overview",
    title: "Project Overview",
    content: `MindScope AI is a multimodal mental health prediction platform that analyzes text, voice, and video inputs to provide comprehensive mental health assessments. The frontend is built with React 19 and Next.js App Router, featuring a modern dark-themed SaaS interface with real-time prediction capabilities and analytics dashboard.`,
  },
  {
    id: "structure",
    title: "Frontend Structure",
    content: null,
    code: `src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
│   ├── ui/           # Shadcn UI primitives
│   ├── layout/       # Navbar, Footer, Sidebar
│   ├── cards/        # Feature, Dataset, Model cards
│   ├── home/         # Landing page sections
│   └── common/       # Motion, Skeleton, Timeline
├── features/         # Page-specific feature modules
├── hooks/            # Custom React hooks
├── services/         # Axios API services
├── types/            # TypeScript type definitions
├── constants/        # Static data and config
├── utils/            # Utility functions
└── styles/           # Global CSS`,
  },
  {
    id: "api",
    title: "API Endpoints",
    content: null,
    endpoints: [
      { method: "POST", path: "/api/predict/multimodal", description: "Combined text + audio + video fusion prediction (primary)" },
      { method: "POST", path: "/api/predict/text", description: "Text-only mental health prediction" },
      { method: "POST", path: "/api/predict/audio", description: "Voice-only emotion and stress analysis" },
      { method: "POST", path: "/api/predict/video", description: "Video-only facial emotion analysis" },
      { method: "GET", path: "/api/history", description: "Retrieve prediction history" },
      { method: "GET", path: "/api/dashboard", description: "Dashboard analytics data" },
      { method: "POST", path: "/api/contact", description: "Contact form submission" },
    ],
  },
  {
    id: "components",
    title: "Components",
    content: `The application includes reusable components: Navbar, Footer, Hero, FeatureCard, DatasetCard, ModelCard, PredictionCard, ChartCard, StatisticsCard, FAQ, Timeline, Testimonial, LoadingSkeleton, Breadcrumb, Sidebar, Modal (Dialog), Drawer, Toast, and Button variants.`,
  },
  {
    id: "installation",
    title: "Installation Guide",
    content: null,
    steps: [
      "Clone the repository: git clone <repo-url>",
      "Navigate to project: cd mental-health-prediction-frontend",
      "Install dependencies: npm install",
      "Copy environment file: cp .env.example .env.local",
      "Start development server: npm run dev",
      "Open http://localhost:3000 in your browser",
    ],
  },
  {
    id: "deployment",
    title: "Deployment Guide",
    content: null,
    steps: [
      "Build the production bundle: npm run build",
      "Test production build locally: npm start",
      "Deploy to Vercel: vercel --prod",
      "Set environment variable NEXT_PUBLIC_API_URL to your backend API URL",
      "Configure custom domain in Vercel dashboard (optional)",
      "Enable analytics and monitoring in Vercel settings",
    ],
  },
];

export function DocumentationContent() {
  return (
    <PageTransition>
      <div className="relative pt-24 pb-16">
        <GridBackground />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Documentation" }]} className="mb-8" />

          <SectionHeader
            badge="Docs"
            title="Documentation"
            description="Technical documentation for the MindScope AI frontend application."
            align="left"
          />

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="glass-card p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>

                {section.content && (
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                )}

                {section.code && (
                  <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-[#0a0f1e] p-4 text-sm text-muted-foreground">
                    <code>{section.code}</code>
                  </pre>
                )}

                {section.endpoints && (
                  <div className="space-y-3">
                    {section.endpoints.map((ep) => (
                      <div
                        key={ep.path}
                        className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-lg border border-white/5 bg-white/5 p-4"
                      >
                        <Badge
                          variant={
                            ep.method === "GET" ? "success" : "info"
                          }
                          className="w-fit shrink-0"
                        >
                          {ep.method}
                        </Badge>
                        <code className="text-sm text-blue-400">{ep.path}</code>
                        <span className="text-sm text-muted-foreground sm:ml-auto">
                          {ep.description}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {section.steps && (
                  <ol className="space-y-2">
                    {section.steps.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-medium text-blue-400">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
