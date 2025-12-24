"use client"

import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/NATHESH RESUM (1).pdf"
    link.download = "NATHESH RESUM (1)(1).pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-full blur-[140px] animate-glow" />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/25 via-accent/15 to-transparent rounded-full blur-[120px] animate-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-[160px] animate-glow"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-2 text-center lg:text-left"
          >
            <p className="text-primary text-sm md:text-base font-mono">{"< Nathesh Venkateswaran />"}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Web Developer
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">{"& Web Designer"}</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0"
          >
            I am passionate about web development and enjoy creating responsive and interactive websites using modern
            technologies. I focus on combining functionality with clean, user-friendly design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:scale-110 transition-all duration-300"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="hover:scale-110 transition-all duration-300 bg-transparent"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 pt-4 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/NATHESH6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathesh-venkateswaran-0b7679324/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:exam@.com"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[350px] md:h-[400px] lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl animate-glow" />
            <div className="relative w-[250px] h-[350px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
              <Image
                src="/photo_2025-12-23_16-00-44.jpg"
                alt="Profile"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
