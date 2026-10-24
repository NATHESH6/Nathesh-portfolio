"use client"

import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Education from "@/components/sections/education"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import ChatbotServices from "@/components/sections/chatbot-services"
import Internship from "@/components/sections/internship"
import Research from "@/components/sections/research"
import Certificates from "@/components/sections/certificates"
import Contact from "@/components/sections/contact"
import Navigation from "@/components/navigation"
import ParticlesBackground from "@/components/particles-background"
import BackToTop from "@/components/back-to-top"
import ChatbotWidget from "@/components/chatbot/chatbot-widget"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <ParticlesBackground />
      <Navigation />

      <div className="relative z-10 pt-20">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <ChatbotServices />
        <Internship />
        <Research />
        <Certificates />
        <Contact />
      </div>

      <BackToTop />
      <ChatbotWidget />
    </main>
  )
}
