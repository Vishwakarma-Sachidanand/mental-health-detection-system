"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Brain,
  Activity,
  Users,
  BookOpen,
  Home,
  Layers,
  Database,
} from "lucide-react";
import { cn } from "@/utils/cn";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/prediction", label: "Prediction", icon: Activity },
  { href: "/models", label: "AI Models", icon: Brain },
  { href: "/dataset", label: "Datasets", icon: Database },
  { href: "/architecture", label: "Architecture", icon: Layers },
  { href: "/documentation", label: "Documentation", icon: BookOpen },
  { href: "/team", label: "Team", icon: Users },
  { href: "/", label: "Home", icon: Home },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "hidden w-64 shrink-0 border-r border-white/5 bg-card/30 lg:block",
        className
      )}
    >
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Navigation
        </p>
        <nav className="space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
