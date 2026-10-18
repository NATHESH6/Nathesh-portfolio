"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useInView } from "framer-motion"
import {
  FolderGit2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import ProjectCard from "@/components/project-card"

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "ml-ai", label: "Machine Learning & AI" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "fullstack", label: "Full-Stack Web" },
  { id: "diploma", label: "Diploma Final Year" },
]

const projects = [
  {
    title: "AI System to Identify and Block Phishing Emails",
    description:
      "Intelligent email security system leveraging machine learning to detect and prevent phishing attacks with high accuracy using XGBoost classification.",
    tech: ["Python", "Flask", "HTML", "CSS", "ML", "XGBoost"],
    categories: ["ml-ai", "cybersecurity", "fullstack"],
    badge: "AI & Cybersecurity",
    image: "/project-phishing.jpg",
    github: "https://github.com/NATHESH6/DEVELOP-AN-AI-SYSTEM-TO-IDENTIFY-AND-BLOCK-PHISHING-EMAILS",
  },
  {
    title: "Cyber Hacking Breach Prediction and Detection",
    description:
      "AI-powered cybersecurity platform predicting and detecting multi-vector breaches using XGBoost. Presented at the CIETM-2026 National Conference.",
    tech: ["Python", "Flask", "XGBoost", "HTML5", "CSS3", "JavaScript"],
    categories: ["ml-ai", "cybersecurity", "fullstack"],
    badge: "CIETM-2026 Presented",
    image: "/project-breach.jpg",
    github: "https://github.com/NATHESH6",
  },
  {
    title: "AI-Powered Predictive Maintenance System for Industrial Equipment",
    description:
      "An AI-powered Remaining Useful Life (RUL) prediction system for industrial equipment, built with Gradient Boosting Regression and a sleek Streamlit dashboard.",
    tech: ["Python", "Streamlit", "HTML", "CSS", "ML", "XGBoost"],
    categories: ["ml-ai"],
    badge: "Industrial ML Project",
    image: "/project-maintenance.jpg",
    github: "https://github.com/NATHESH6/AI-Powered-Predictive-Maintenance-System-for-Industrial-Equipment",
  },
  {
    title: "Image Steganography using Modified SDSA Algorithm",
    description:
      "Advanced steganography system that hides data within images using the Spatially De-synchronization Steganography Algorithm for enhanced security and imperceptibility.",
    tech: ["C#", "SDSA Algorithm", "Image Processing", "Cryptography"],
    categories: ["cybersecurity", "diploma"],
    badge: "Diploma Final Year",
    image: "/project-steganography.jpg",
    github: "https://github.com/NATHESH6/IMAGE-STEGANOGRAPHY-USING-MODIFIED-SDSA-ALGORITHM",
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Detect responsive screen size for cards per slide
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.categories?.includes(activeFilter))

  // Number of cards visible per slide view
  const cardsPerPage = isDesktop ? 2 : 1
  const maxIndex = Math.max(0, filteredProjects.length - cardsPerPage)

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeFilter])

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-gradient-to-bl from-primary/18 via-accent/12 to-transparent rounded-full blur-[135px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[520px] h-[520px] bg-gradient-to-tr from-accent/18 to-transparent rounded-full blur-[145px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-wider font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-4"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>FEATURED_PROJECTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance"
          >
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto text-center"
          >
            Intelligent web applications, machine learning detection systems, and secure cryptographic tools.
          </motion.p>
        </div>

        {/* Project Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 max-w-4xl mx-auto"
        >
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${isActive
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                  : "bg-card/70 hover:bg-card text-muted-foreground hover:text-foreground border border-border/80 hover:border-cyan-500/40"
                  }`}
              >
                {cat.label}
              </button>
            )
          })}
        </motion.div>

        {/* Project Slider Container with Outside Direction Buttons */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 md:px-14">
          {/* Top Info Bar (Without Auto / Top Arrows) */}
          <div className="flex items-center justify-between gap-4 mb-4 px-1">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "Project" : "Projects"}
            </span>
            {filteredProjects.length > cardsPerPage && (
              <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
                Showing {currentIndex + 1} -{" "}
                {Math.min(currentIndex + cardsPerPage, filteredProjects.length)} of{" "}
                {filteredProjects.length}
              </span>
            )}
          </div>

          {/* Left Direction Button - Outside of Cards */}
          {filteredProjects.length > cardsPerPage && (
            <button
              onClick={handlePrev}
              className="absolute -left-2 sm:left-0 md:left-1 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-card/90 dark:bg-[#070e1b]/95 backdrop-blur-md border border-cyan-500/35 hover:border-cyan-400 text-foreground hover:text-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}

          {/* Right Direction Button - Outside of Cards */}
          {filteredProjects.length > cardsPerPage && (
            <button
              onClick={handleNext}
              className="absolute -right-2 sm:right-0 md:right-1 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-card/90 dark:bg-[#070e1b]/95 backdrop-blur-md border border-cyan-500/35 hover:border-cyan-400 text-foreground hover:text-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}

          {/* Slider Track Viewport */}
          <div className="overflow-hidden relative py-2">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * (100 / cardsPerPage)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500
                if (swipe && offset.x < 0) {
                  handleNext()
                } else if (swipe && offset.x > 0) {
                  handlePrev()
                }
              }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`px-3 md:px-4 shrink-0 transition-opacity duration-300 ${cardsPerPage === 2 ? "w-full md:w-1/2" : "w-full"
                    }`}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    isInView={isInView}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slider Pagination Dots */}
          {filteredProjects.length > cardsPerPage && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => {
                const isActive = currentIndex === dotIndex
                return (
                  <button
                    key={dotIndex}
                    onClick={() => setCurrentIndex(dotIndex)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${isActive
                      ? "w-8 h-2 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                      : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                      }`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
