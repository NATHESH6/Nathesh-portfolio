"use client"

import { motion } from "framer-motion"
import { Github, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tech: string[]
    image: string
    github: string
    live?: string
    categories?: string[]
    badge?: string
  }
  index: number
  isInView?: boolean
  className?: string
}

export default function ProjectCard({
  project,
  index,
  isInView = true,
  className = "",
}: ProjectCardProps) {
  // Determine a category badge if not explicitly provided
  const categoryBadge =
    project.badge ||
    (project.categories?.includes("diploma")
      ? "Diploma Final Year"
      : project.categories?.includes("cybersecurity")
        ? "AI & Cybersecurity"
        : project.categories?.includes("ml-ai")
          ? "Machine Learning"
          : "Featured Project")

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`relative group h-full flex flex-col ${className}`}
    >
      {/* Ambient Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-blue-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-85 transition duration-300 pointer-events-none" />

      {/* Main Card */}
      <div className="relative h-full flex flex-col justify-between bg-card/90 dark:bg-[#070e1b]/95 border border-border/80 dark:border-cyan-500/25 rounded-2xl overflow-hidden hover:border-cyan-500/50 shadow-lg transition-all duration-300">
        {/* Project Thumbnail Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950/80 border-b border-border/60">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

          {/* Floating Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-black/75 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              {categoryBadge}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-cyan-950/50 dark:bg-cyan-950/70 text-cyan-400 border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2 border-t border-border/50">
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-card/60 hover:bg-cyan-500 hover:text-slate-950 border-cyan-500/40 text-foreground font-semibold transition-all duration-300 gap-2 cursor-pointer"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View code for ${project.title}`}
                >
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
