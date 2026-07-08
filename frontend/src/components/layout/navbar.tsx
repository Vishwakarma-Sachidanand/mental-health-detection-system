"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Brain, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/constants/site";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/utils/cn";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const primaryLinks = NAV_LINKS.slice(0, 5);
  const moreLinks = NAV_LINKS.slice(5);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Mind<span className="gradient-text">Scope</span> AI
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href
                  ? "text-foreground bg-white/5"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground cursor-pointer",
                moreLinks.some((l) => l.href === pathname)
                  ? "text-foreground bg-white/5"
                  : "text-muted-foreground"
              )}
            >
              More
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  moreOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-white/10 bg-card p-2 shadow-2xl"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5",
                        pathname === link.href
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/documentation">Docs</Link>
          </Button>
          <Button variant="gradient" size="sm" asChild>
            <Link href="/prediction">Try Prediction</Link>
          </Button>
        </div>

        <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
          <DrawerTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5",
                    pathname === link.href
                      ? "text-foreground bg-white/5"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <Button variant="gradient" className="w-full" asChild>
                <Link href="/prediction" onClick={() => setMobileOpen(false)}>
                  Try Prediction
                </Link>
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}
