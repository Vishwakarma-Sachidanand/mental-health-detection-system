"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/common/motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { GridBackground } from "@/components/common/animated-background";
import { TEAM_MEMBERS } from "@/constants/team";
import type { TeamMember } from "@/types";

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card overflow-hidden"
    >
      <div className="flex justify-center px-6 py-6">
        <div className="relative size-[120px] shrink-0 overflow-hidden rounded-full border-[3px] border-blue-400/80 bg-[#0F172A] shadow-[0_8px_32px_rgba(59,130,246,0.28)]">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="origin-center object-cover"
            style={{
              objectPosition: member.avatarPosition ?? "center top",
              transform: `scale(${member.avatarScale ?? 1.05})`,
            }}
            sizes="120px"
          />
        </div>
      </div>

      <div className="px-6 pb-6">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-sm text-blue-400 mb-4">{member.role}</p>

        <div className="mb-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Skills
          </p>
          <div className="flex flex-wrap gap-1.5">
            {member.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Responsibilities
          </p>
          <ul className="space-y-1">
            {member.responsibilities.map((resp) => (
              <li
                key={resp}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                {resp}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 pt-2 border-t border-white/5">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function TeamPageContent() {
  return (
    <PageTransition>
      <div className="relative pt-24 pb-16">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Team" }]} className="mb-8" />

          <SectionHeader
            badge="Team"
            title="Meet The Developers"
            description="Two minds, one vision — the talented individuals behind MindScope AI, building intelligent solutions together."
          />

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
