"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Factory, MapPin, ListChecks, CheckCircle2 } from "lucide-react"

export default function Internship() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const responsibilities = [
    {
      title: "Data Preprocessing",
      description:
        "Cleaned, normalized, and synchronized high-frequency vibration and thermal sensor streams, eliminating noise and sensor drifts.",
    },
    {
      title: "Feature Engineering",
      description:
        "Extracted statistical frequency-domain indicators (RMS, Kurtosis, Crest Factor) from telemetry time-series to capture machine wear.",
    },
    {
      title: "Predictive Modeling",
      description:
        "Formulated and trained supervised classification and regression models to predict Mean Time To Failure (MTTF).",
    },
    {
      title: "Industrial AI & Python",
      description:
        "Authored modular Python pipelines utilizing NumPy, Pandas, and Scikit-Learn for automated batch evaluation.",
    },
    {
      title: "Model Evaluation",
      description:
        "Conducted cross-validation, precision-recall analysis, and ROC-AUC metrics to prevent false alarm stoppages.",
    },
    {
      title: "Team Collaboration",
      description:
        "Partnered closely with plant engineers and domain specialists to integrate ML insights into preventative maintenance schedules.",
    },
  ]

  const technologies = ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"]

  return (
    <section id="internship" className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background glow effects matching portfolio style */}
      <div className="absolute top-1/4 right-1/4 w-[520px] h-[520px] bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[480px] h-[480px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-xs font-mono tracking-wider font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-4"
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>INDUSTRY_EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance"
          >
            <span className="text-foreground">Industrial </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Internship
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl text-balance"
          >
            Real-world engineering application of predictive algorithms in an industrial production setting.
          </motion.p>
        </div>

        {/* Main Internship Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-5xl mx-auto group"
        >
          {/* Ambient border glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/25 via-emerald-500/20 to-sky-500/25 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition duration-500" />

          <div className="relative rounded-2xl md:rounded-3xl border border-cyan-500/30 dark:border-cyan-500/35 bg-card/90 dark:bg-[#070d19]/95 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_0_35px_rgba(6,182,212,0.12)] hover:border-cyan-500/50 transition-all duration-300">
            {/* Card Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Company Branding */}
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  Industrial ML Internship
                </span>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.22)] shrink-0">
                    <Factory className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                      Grandtwin
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <span>
                        Chennai, Tamil Nadu • <strong className="text-foreground/90 font-medium">4 Months Duration</strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Role Title & Domain */}
              <div className="md:text-right flex flex-col justify-center">
                <span className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400">
                  Machine Learning Intern
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-mono mt-1">
                  Industrial Automation &amp; Predictive Maintenance
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border/60 dark:bg-slate-800/80 my-8" />

            {/* Card Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              {/* Left Column: Responsibilities */}
              <div className="lg:col-span-7 space-y-6">
                <h4 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2.5">
                  <ListChecks className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
                  <span>Key Responsibilities &amp; Contributions:</span>
                </h4>

                <ul className="space-y-4">
                  {responsibilities.map((resp, idx) => (
                    <motion.li
                      key={resp.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.35 + idx * 0.08 }}
                      className="flex items-start gap-3 group/item text-sm sm:text-base leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <div>
                        <strong className="text-foreground font-semibold">
                          {resp.title}:
                        </strong>{" "}
                        <span>{resp.description}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Metrics & Tech Stack */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                {/* Metric Card 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-border dark:border-slate-800 bg-muted/40 dark:bg-slate-900/60 p-6 sm:p-7 text-center backdrop-blur-sm shadow-sm hover:border-cyan-500/40 transition-all"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold text-cyan-500 dark:text-cyan-400 tracking-tight mb-2">
                    4
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-300 font-medium">
                    Months of Hands-On Industrial ML Experience
                  </div>
                </motion.div>

                {/* Metric Card 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-border dark:border-slate-800 bg-muted/40 dark:bg-slate-900/60 p-6 sm:p-7 text-center backdrop-blur-sm shadow-sm hover:border-cyan-500/40 transition-all"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold text-cyan-500 dark:text-cyan-400 tracking-tight mb-2">
                    94%
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-300 font-medium">
                    Model Accuracy in Forecasting Machine Degradation
                  </div>
                </motion.div>

                {/* Technologies Applied */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="rounded-2xl border border-border/80 dark:border-slate-800/80 bg-muted/30 dark:bg-slate-900/40 p-5 sm:p-6 backdrop-blur-sm"
                >
                  <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                    Technologies Applied:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-lg bg-card dark:bg-slate-800/90 border border-border dark:border-slate-700/70 text-xs sm:text-sm font-medium text-foreground dark:text-slate-200 hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
