import Link from "next/link";
import { Brain, Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">
                Mind<span className="gradient-text">Scope</span> AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advanced multimodal AI platform for mental health prediction and
              monitoring through text, voice, and video analysis.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.slice(6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/documentation#api"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>{SITE_CONFIG.email}</li>
              <li>{SITE_CONFIG.phone}</li>
              <li>Final Year Project</li>
              <li>Computer Science & Engineering</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MindScope AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Mental Health Prediction Using Multimodal AI
          </p>
        </div>
      </div>
    </footer>
  );
}
