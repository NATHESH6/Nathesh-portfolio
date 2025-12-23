"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SkillCard from "@/components/skill-card"

const skills = [
  // Frontend
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  // Backend
  { name: "Python", icon: "python" },
  { name: "Java", icon: "java" },
  // Database
  { name: "MySQL", icon: "mysql" },
  // Software & Tools
  { name: "VS Code", icon: "vscode" },
  { name: "MS Office", icon: "microsoftoffice" },
  { name: "Canva", icon: "canva" },
  { name: "VirtualBox", icon: "virtualbox" },
  { name: "Computer Hardware", icon: "hardware" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-20 md:py-32" ref={ref}>
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-[130px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-accent/15 via-primary/10 to-transparent rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-balance text-center"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
