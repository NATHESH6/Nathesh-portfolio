import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Education from "@/components/sections/education"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Certificates from "@/components/sections/certificates"
import Contact from "@/components/sections/contact"
import Navigation from "@/components/navigation"
import ParticlesBackground from "@/components/particles-background"

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
        <Certificates />
        <Contact />
      </div>
    </main>
  )
}
