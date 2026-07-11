"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Code2, BookOpen } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Calendar,
      title: "Years in Tech",
      description: "4+ years of experience in technology and programming",
    },
    {
      icon: Code2,
      title: "Code Experience",
      description: "4+ years of hands-on coding and development experience",
    },
    {
      icon: BookOpen,
      title: "Learning New Tech",
      description: "Continuously exploring and learning new computer technologies",
    },
  ]

  return (
    <section id="about" className="relative py-20 md:py-32" ref={ref}>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-primary/15 via-accent/15 to-transparent rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-balance"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/15 to-primary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-all">
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi everyone. My name is Nathesh. I recently graduated with a B.E. in Computer Science and Engineering from the Coimbatore Institute of Engineering and Technology.

Throughout my academic journey, I have built strong hands-on experience in full-stack development and Machine Learning using Python.
                During my third year, I developed an AI system to identify and block phishing emails using the XGBoost algorithm, handling both frontend and backend development. 
                For my final year project, I led a team to build a 'Cyber Hacking Breach Prediction and Detection' system, also powered by XGBoost. I managed the frontend design, backend programming, and team leadership.
                We proudly presented this research at the National Conference on Contemporary Innovations in Engineering, Technology, and Management (CIETM-2026).

Following my graduation, I completed a 4-month Machine Learning internship at Grandtwin in Chennai, where I worked on an 'AI-Powered Predictive Maintenance System for Industrial Equipment'.

My technical foundation started during my Diploma at Kongu Polytechnic College in Erode. 
                For our final project there, I served as the team leader and frontend designer for an 'Image Steganography using Modified SASD Algorithm' project built with C#.
                My diploma years helped me build self-learning skills in HTML, CSS, Python, MySQL, and computer hardware. Over my four years in engineering, I have significantly advanced my programming expertise and overall technical skills.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
