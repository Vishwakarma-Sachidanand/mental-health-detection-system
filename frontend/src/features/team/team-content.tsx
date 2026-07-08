"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";
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
      className={`glass-card overflow-hidden ${member.guide ? "ring-1 ring-blue-500/30" : ""}`}
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        {member.guide && (
          <Badge className="absolute top-4 right-4" variant="info">
            <GraduationCap className="h-3 w-3 mr-1" />
            Guide
          </Badge>
        )}
      </div>

      <div className="p-6">
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
  const guide = TEAM_MEMBERS.filter((m) => m.guide);
  const students = TEAM_MEMBERS.filter((m) => !m.guide);

  return (
    <PageTransition>
      <div className="relative pt-24 pb-16">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Team" }]} className="mb-8" />

          <SectionHeader
            badge="Team"
            title="Meet Our Team"
            description="The talented individuals behind MindScope AI."
          />

          {guide.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-6 text-lg font-semibold text-center">Project Guide</h3>
              <div className="mx-auto max-w-md">
                {guide.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-center">Team Members</h3>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {students.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
