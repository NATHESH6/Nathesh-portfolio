"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import ProjectCard from "@/components/project-card"

const projects = [
  {
    title: "Image Steganography using Modified SDSA Algorithm",
    description:
      "Advanced steganography system that hides data within images using the Spatially De-synchronization Steganography Algorithm for enhanced security and imperceptibility.",
    tech: ["C#", "SDSA Algorithm", "Image Processing", "Cryptography"],
    image: "/steganography-security-encryption.jpg",
    github: "https://github.com/NATHESH6/IMAGE-STEGANOGRAPHY-USING-MODIFIED-SDSA-ALGORITHM",
  },
  {
    title: "AI System to Identify and Block Phishing Emails",
    description:
      "Intelligent email security system leveraging machine learning to detect and prevent phishing attacks with high accuracy using XGBoost classification.",
    tech: ["Python", "Flask", "HTML", "CSS", "ML", "XGBoost"],
    image: "/ai-phishing-detection-email-security.jpg",
    github: "https://github.com/NATHESH6/DEVELOP-AN-AI-SYSTEM-TO-IDENTIFY-AND-BLOCK-PHISHING-EMAILS",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-20 md:py-32" ref={ref}>
      <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-gradient-to-bl from-primary/18 via-accent/12 to-transparent rounded-full blur-[135px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[520px] h-[520px] bg-gradient-to-tr from-accent/18 to-transparent rounded-full blur-[145px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-balance text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
