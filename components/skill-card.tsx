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
    css3: "data:image/png;base64,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",
    javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
    python: "https://cdn.simpleicons.org/python/3776AB",
    java: "/java-logo.png",
    mysql: "https://cdn.simpleicons.org/mysql/4479A1",
    vscode: "/vscode-logo.jpg",
    microsoftoffice: "/ms-office-logo.jpg",
    canva: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeIxjgyH60tK_BW0mW_HhUE-HAjIJmmlmog&s",
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
