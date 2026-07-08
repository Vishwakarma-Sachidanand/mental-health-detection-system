export const SITE_CONFIG = {
  name: "MindScope AI",
  title: "MindScope AI — Mental Health Prediction Using Multimodal AI",
  description:
    "Advanced multimodal AI platform for mental health prediction through text, voice, and video analysis.",
  url: "https://mindscope-ai.vercel.app",
  email: "contact@mindscope-ai.edu",
  phone: "+91 98765 43210",
  linkedin: "https://linkedin.com/company/mindscope-ai",
  github: "https://github.com/mindscope-ai",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/architecture", label: "Architecture" },
  { href: "/dataset", label: "Datasets" },
  { href: "/models", label: "AI Models" },
  { href: "/prediction", label: "Live Prediction" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/documentation", label: "Docs" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const;

export const THEME = {
  primary: "#2563EB",
  background: "#020617",
  card: "#0F172A",
  accentFrom: "#2563EB",
  accentTo: "#9333EA",
} as const;
