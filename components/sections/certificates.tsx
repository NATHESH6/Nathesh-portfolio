"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Award,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Maximize2,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    title: "Cyber Hacking Breaches Detection And Prediction Using Machine Learning",
    issuer: "National Conference on Contemporary Innovations in Engineering Technology & Management, organized by CIET",
    date: "May 2026",
    category: "National Conference & Research",
    image: "/Cyber hacking breachers.jpeg",
    description:
      "Original research presentation exploring predictive cyber defense frameworks using gradient boosted trees (XGBoost) and anomaly classification.",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    date: "2024",
    category: "AI & Neural Networks",
    image: "/Screenshot 2025-12-24 081923.png",
    description:
      "Comprehensive training on neural network architectures, computer vision pipelines, and deep learning model optimization with GPU acceleration.",
  },
  {
    title: "Full Stack Development",
    issuer: "NoviTech R&D Private Limited",
    date: "Dec 2025 - Jan 2026",
    category: "Full Stack Engineering",
    image: "/Screenshot 2026-02-17 112022.png",
    description:
      "Intensive hands-on program developing scalable full-stack web applications, RESTful APIs, and database-driven architectures.",
  },
  {
    title: "Web Development using PHP Programming and MySQL",
    issuer: "Infosys Springboard",
    date: "2025",
    category: "Backend & Databases",
    image: "/Screenshot 2025-12-24 082027.png",
    description:
      "Relational database design, server-side data workflows, session handling, and dynamic web application engineering.",
  },
  {
    title: "Soft Skills Enrichment Program",
    issuer: "IBM (by Govindon G & Prajesh Jayaraman)",
    date: "2024",
    category: "Professional Leadership",
    image: "/Screenshot 2025-12-24 082010.png",
    description:
      "Professional communication, team collaboration, engineering leadership, and agile development methodologies by IBM professionals.",
  },
  {
    title: "Complete Basic Python",
    issuer: "Digilabs",
    date: "2024",
    category: "Python Programming",
    image: "/Compleate basic python.png",
    description:
      "Object-oriented programming, data structures, algorithmic problem solving, and computational logic in Python.",
  },
  {
    title: "Technical Events & Project Showcase",
    issuer: "Karpagam College of Engineering",
    date: "2024",
    category: "Competitions & Symposia",
    image: "/Technical events.jpg",
    description:
      "Recognition for engineering prototype demonstrations and inter-collegiate technical event achievements.",
  },
  {
    title: "Service Technician Certification",
    issuer: "Kongu Polytechnic College",
    date: "2023",
    category: "Hardware & Systems",
    image: "/IMG_20251205_155650.jpg",
    description:
      "Computer hardware diagnostics, motherboard architecture, peripheral troubleshooting, and networking infrastructure.",
  },
]

export default function Certificates() {
  const ref = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPaused, setIsPaused] = useState(false)
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(null)

  // Duplicate list to achieve continuous infinite marquee loop
  const infiniteList = [...certificates, ...certificates]

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -380, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 380, behavior: "smooth" })
    }
  }

  return (
    <section id="certificates" className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-tl from-indigo-500/15 via-cyan-500/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-400 text-xs font-mono tracking-wider font-semibold shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-4"
          >
            <Award className="h-3.5 w-3.5" />
            <span>VERIFIED_CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance"
          >
            <span className="text-foreground">Certificates & </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl text-balance"
          >
            Continuous professional growth through accredited technical courses, national symposiums, and engineering research.
          </motion.p>

          {/* Interactive Controls Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-between gap-4 w-full max-w-6xl mt-6 px-2"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                {certificates.length} Verified Credentials
              </span>
              <span className="hidden sm:inline-block text-xs text-muted-foreground font-mono">
                • Hover or drag to pause • Click to inspect
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPaused(!isPaused)}
                className="h-8 px-3 rounded-lg border-border/80 bg-card/60 backdrop-blur-md text-xs font-mono gap-1.5 hover:border-cyan-500/50"
                aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-cyan-400" /> : <Pause className="w-3.5 h-3.5 text-cyan-400" />}
                <span className="hidden sm:inline">{isPaused ? "Resume" : "Pause"}</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={scrollLeft}
                className="h-8 w-8 rounded-lg border-border/80 bg-card/60 backdrop-blur-md hover:border-cyan-500/50"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={scrollRight}
                className="h-8 w-8 rounded-lg border-border/80 bg-card/60 backdrop-blur-md hover:border-cyan-500/50"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Carousel Container with Edge Gradient Masks */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right gradient fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-background via-background/70 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-background via-background/70 to-transparent z-20" />

        {/* Marquee Track Container without scrollbar */}
        <div
          ref={trackRef}
          className="w-full overflow-hidden no-scrollbar scrollbar-none"
        >
          <div
            className={`animate-infinite-carousel flex gap-6 px-6 ${
              isPaused ? "carousel-paused" : ""
            }`}
          >
            {infiniteList.map((cert, index) => (
              <Dialog key={`${cert.title}-${index}`}>
                <DialogTrigger asChild>
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="w-[310px] sm:w-[350px] shrink-0 group relative cursor-pointer"
                  >
                    {/* Ambient Hover Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/25 via-purple-500/20 to-indigo-500/25 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Card Container */}
                    <div className="relative h-full flex flex-col justify-between rounded-2xl border border-border/80 dark:border-cyan-500/25 bg-card/90 dark:bg-[#070e1b]/95 backdrop-blur-xl overflow-hidden group-hover:border-cyan-500/50 shadow-lg transition-all duration-300 group-hover:-translate-y-1.5">
                      {/* Certificate Thumbnail Preview */}
                      <div className="h-44 w-full relative overflow-hidden bg-slate-950/80 border-b border-border/60">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                        {/* Date Badge */}
                        <div className="absolute top-3 right-3 z-10">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/75 text-cyan-300 border border-cyan-500/35 backdrop-blur-md shadow-sm">
                            {cert.date}
                          </span>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase font-bold bg-purple-950/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                            {cert.category}
                          </span>
                        </div>

                        {/* Hover Zoom Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-400 text-slate-950 shadow-lg">
                            <Maximize2 className="w-3.5 h-3.5" /> Inspect
                          </span>
                        </div>
                      </div>

                      {/* Card Information */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-base font-bold text-foreground leading-snug line-clamp-2 group-hover:text-cyan-400 transition-colors mb-2">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-muted-foreground flex items-center gap-1.5 line-clamp-1">
                            <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span>{cert.issuer}</span>
                          </p>
                        </div>

                        {/* Card Action Link */}
                        <div className="pt-4 mt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                          <span>View Credential</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                {/* Certificate Inspection Modal */}
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card/95 dark:bg-[#070e1b]/98 border border-border/80 dark:border-cyan-500/35 backdrop-blur-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                      {cert.title}
                    </DialogTitle>
                    <DialogDescription className="text-cyan-400 font-medium">
                      Issued by {cert.issuer} • {cert.date}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 pt-2">
                    {/* Full-size High-Res Image Preview */}
                    <div className="relative rounded-xl overflow-hidden border border-border/80 dark:border-cyan-500/30 bg-slate-950/60 shadow-xl">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-auto max-h-[480px] object-contain mx-auto rounded-lg"
                      />
                    </div>

                    {/* Metadata Specs */}
                    <div className="p-4 rounded-xl border border-border/60 bg-muted/30 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                          Issuing Authority
                        </span>
                        <span className="text-sm font-semibold text-foreground mt-0.5 block">
                          {cert.issuer}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                          Credential Domain
                        </span>
                        <span className="text-sm font-semibold text-foreground mt-0.5 block">
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
