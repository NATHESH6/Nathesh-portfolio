"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  // Radius and circumference of SVG progress ring
  const radius = 20
  const circumference = 2 * Math.PI * radius // ≈ 125.66

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      // Show button after scrolling past 200px
      if (scrollTop > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Calculate progress percentage (0 - 100)
      if (docHeight > 0) {
        const currentProgress = (scrollTop / docHeight) * 100
        setProgress(Math.min(100, Math.max(0, currentProgress)))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Calculate SVG stroke offset based on progress percentage
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-background/85 dark:bg-[#070e1b]/90 backdrop-blur-md border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 group cursor-pointer"
          aria-label="Back to top"
          title={`Back to top (${Math.round(progress)}%)`}
        >
          {/* Circular SVG Progress Ring */}
          <svg
            className="absolute top-0 left-0 w-12 h-12 -rotate-90 pointer-events-none"
            viewBox="0 0 48 48"
          >
            {/* Background Track Circle */}
            <circle
              className="text-cyan-950/40 dark:text-cyan-950/60"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="24"
              cy="24"
            />
            {/* Active Progress Circle */}
            <circle
              className="text-cyan-400 transition-all duration-100 ease-out"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="24"
              cy="24"
            />
          </svg>

          {/* Up Arrow Icon */}
          <ArrowUp className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 group-hover:-translate-y-0.5 transition-all duration-200 z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
