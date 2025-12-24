"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SkillCardProps {
  skill: {
    name: string
    icon: string
  }
  index: number
}

const getIconUrl = (iconName: string) => {
  const iconMap: Record<string, string> = {
    html5: "https://cdn.simpleicons.org/html5/E34F26",
    css3: "/css-logo.jpg",
    javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
    python: "https://cdn.simpleicons.org/python/3776AB",
    java: "/java-logo.png",
    mysql: "https://cdn.simpleicons.org/mysql/4479A1",
    vscode: "/vscode-logo.jpg",
    microsoftoffice: "/ms-office-logo.jpg",
    canva: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSAPZqzReNHPlULGZRRRpH5c8vAyNcunJPQ&s",
    virtualbox: "https://cdn.simpleicons.org/virtualbox/183A61",
    hardware: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIYaq3MSCGF5M7A0MQaqNmmx81X5VbHIRvA&s",
  }
  return iconMap[iconName] || "https://cdn.simpleicons.org/gnubash/4EAA25"
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const isLocalImage =
    skill.icon === "vscode" || skill.icon === "microsoftoffice" || skill.icon === "java" || skill.icon === "css3"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
      <div className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
        <div className="w-12 h-12 mb-3 relative">
          <Image
            src={getIconUrl(skill.icon) || "/placeholder.svg"}
            alt={skill.name}
            width={48}
            height={48}
            className={`object-contain ${isLocalImage ? "" : "dark:invert-0 invert"}`}
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
      </div>
    </motion.div>
  )
}
