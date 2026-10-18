"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Zap,
  Landmark,
  FileText,
  Award,
  Crown,
  Trophy,
  Cpu,
  ExternalLink,
  ShieldAlert,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Research() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: Award,
      title: "Conference Presentation Honor",
      description:
        "Presented technical findings before academic and industrial evaluators at CIETM-2026.",
    },
    {
      icon: Crown,
      title: "Dual Project Team Leadership",
      description:
        "Selected as Team Leader for both B.E. Conference Research and Diploma Final Year Steganography.",
    },
    {
      icon: Trophy,
      title: "Academic Achievements Projects",
      description: [
        "Cyber Hacking Breach Prediction and Detection using Machine Learning and ",
        "Machine Learning System to Identify and Block Phishing Emails"
      ]
    },
    {
      icon: Cpu,
      title: "Applied AI Deployment",
      description:
        "Engineered functioning end-to-end Machine Learning systems with Flask REST backends.",
    },
  ]

  return (
    <section id="research" className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/15 via-indigo-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance"
          >
            <span className="text-foreground">Research & </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl text-balance"
          >
            Peer-reviewed academic presentation advancing machine learning applications in cybersecurity.
          </motion.p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-stretch">
          {/* Left Column: Research Presentation Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 relative group flex flex-col"
          >
            {/* Ambient border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/25 via-cyan-500/20 to-indigo-500/25 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition duration-500 pointer-events-none" />

            <div className="relative rounded-2xl md:rounded-3xl border border-border/80 dark:border-cyan-500/25 bg-card/90 dark:bg-[#070e1b]/95 backdrop-blur-xl p-6 sm:p-8 md:p-9 shadow-[0_0_35px_rgba(6,182,212,0.08)] hover:border-cyan-500/40 transition-all duration-300 flex-1 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/70 text-purple-300 border border-purple-500/40 shadow-sm">
                    <Zap className="h-3.5 w-3.5 fill-purple-400 text-purple-400" />
                    <span>National Conference Presenter</span>
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/60 text-cyan-400 border border-cyan-500/40 tracking-wider shadow-sm">
                    CIETM-2026
                  </span>
                </div>

                {/* Main Paper Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-snug mb-3">
                  Cyber Hacking Breach Prediction and Detection using Machine Learning
                </h3>

                {/* Conference Title */}
                <div className="flex items-start gap-2.5 text-purple-400 dark:text-purple-300 font-medium text-sm sm:text-base mb-5">
                  <Landmark className="h-5 w-5 shrink-0 text-purple-400 mt-0.5" />
                  <span className="leading-snug">
                    National Conference on Contemporary Innovations in Engineering, Technology, and Management (CIETM-2026)
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-6">
                  Successfully presented original engineering research examining predictive defense mechanisms
                  against multi-vector cyber breaches. The study demonstrated how gradient boosted decision trees
                  (XGBoost) can synthesize real-time packet headers, behavioral anomalies, and access frequency
                  patterns to thwart breach attempts prior to unauthorized lateral movement.
                </p>
              </div>

              <div>
                {/* Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-t border-border/60">
                  <div>
                    <span className="block text-[11px] font-mono tracking-wider font-semibold text-muted-foreground uppercase">
                      ROLE
                    </span>
                    <span className="text-sm font-bold text-foreground mt-1 block">
                      Student Team Leader & Primary Presenter
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono tracking-wider font-semibold text-muted-foreground uppercase">
                      ALGORITHM
                    </span>
                    <span className="text-sm font-bold text-foreground mt-1 block">
                      XGBoost + Anomaly Classification
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono tracking-wider font-semibold text-muted-foreground uppercase">
                      DOMAIN
                    </span>
                    <span className="text-sm font-bold text-foreground mt-1 block">
                      AI in Cybersecurity & Network Defense
                    </span>
                  </div>
                </div>

                {/* Dialog Trigger Button */}
                <div className="pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-2.5 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                        <FileText className="h-4 w-4" />
                        <span>View Research Presentation Details</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card/95 dark:bg-[#070e1b]/98 border border-border/80 dark:border-cyan-500/30 backdrop-blur-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl font-extrabold text-foreground">
                          Cyber Hacking Breach Prediction and Detection
                        </DialogTitle>
                        <DialogDescription className="text-purple-400 dark:text-purple-300 font-medium">
                          National Conference on Contemporary Innovations in Engineering, Technology, and Management (CIETM-2026)
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-6 pt-2">
                        {/* Certificate / Presentation Image */}
                        <div className="relative rounded-xl overflow-hidden border border-border/70 dark:border-cyan-500/30 group">
                          <img
                            src="/Cyber hacking breachers.jpeg"
                            alt="Conference Presentation Certificate"
                            className="w-full h-auto object-cover max-h-[380px] rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                        </div>

                        {/* Paper Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl border border-border/60 bg-muted/30">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                              Institution & Venue
                            </h4>
                            <p className="text-sm font-semibold text-foreground">
                              Coimbatore Institute of Engineering and Technology
                            </p>
                          </div>
                          <div className="p-4 rounded-xl border border-border/60 bg-muted/30">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                              Conference Date
                            </h4>
                            <p className="text-sm font-semibold text-foreground">
                              May 2026
                            </p>
                          </div>
                          <div className="p-4 rounded-xl border border-border/60 bg-muted/30">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                              Lead Author / Role
                            </h4>
                            <p className="text-sm font-semibold text-foreground">
                              Nathesh P V (Team Leader & Primary Presenter)
                            </p>
                          </div>
                          <div className="p-4 rounded-xl border border-border/60 bg-muted/30">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                              Core Technology
                            </h4>
                            <p className="text-sm font-semibold text-foreground">
                              Python, XGBoost, Anomaly Detection & Flask
                            </p>
                          </div>
                        </div>

                        {/* Abstract */}
                        <div className="p-4 sm:p-5 rounded-xl border border-cyan-500/25 bg-cyan-950/20">
                          <h4 className="text-sm font-bold text-cyan-400 mb-2 flex items-center gap-2">
                            <ShieldAlert className="h-4 w-4" />
                            Research Abstract & Findings
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            This research proposes an intelligent cyber security paradigm combining high-performance
                            XGBoost classifiers with behavioral telemetry analysis. By evaluating real-time network
                            traffic vectors and authorization requests, the framework accurately identifies anomalous
                            patterns and prevents unauthorized access before catastrophic breaches occur.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Vertically Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {achievements.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative group rounded-2xl border border-border/80 dark:border-purple-500/20 bg-card/90 dark:bg-[#070e1b]/95 backdrop-blur-xl p-5 shadow-lg hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)] transition-all duration-300 hover:translate-x-1 flex items-start gap-4"
                >
                  {/* Purple Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0 text-purple-400 group-hover:bg-purple-500/25 group-hover:scale-105 transition-all duration-300 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-foreground group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h4>
                    {Array.isArray(item.description) ? (
                      <div className="space-y-1 mt-1">
                        {item.description.map((desc, i) => (
                          <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                            {desc}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
