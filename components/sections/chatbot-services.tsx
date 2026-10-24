"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Bot,
  Sparkles,
  Zap,
  BrainCircuit,
  ArrowRight,
  Send,
  HelpCircle,
  Briefcase,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const sampleQueries = [
  {
    category: "Technical Expertise",
    question: "What are Nathesh's technical skills in web dev and ML?",
    icon: Zap,
  },
  {
    category: "Cybersecurity Project",
    question: "Tell me about the Phishing Email Detection AI system",
    icon: BrainCircuit,
  },
  {
    category: "Industrial Experience",
    question: "Explain the Predictive Maintenance project from Grandtwin",
    icon: Briefcase,
  },
  {
    category: "Academic & Research",
    question: "What research did Nathesh present at CIETM-2026?",
    icon: HelpCircle,
  },
  {
    category: "Education & Marks",
    question: "What are his college degree and diploma percentages?",
    icon: CheckCircle2,
  },
  {
    category: "Hiring & Availability",
    question: "Is Nathesh available for job opportunities or freelance?",
    icon: Sparkles,
  },
]

export default function ChatbotServices() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [customQuestion, setCustomQuestion] = useState("")

  // Trigger floating chatbot with an optional question
  const openChatWithQuestion = (query?: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-portfolio-chat", {
          detail: { query: query || customQuestion },
        })
      )
      setCustomQuestion("")
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (customQuestion.trim()) {
      openChatWithQuestion(customQuestion.trim())
    }
  }

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-primary/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-indigo-500/15 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-xs font-mono tracking-wider font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
            <span>INTERACTIVE AI FACILITY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-cyan-400 to-primary bg-clip-text text-transparent"
          >
            Interactive AI Chatbot Facility
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            Communicate directly with our live **Question-Response AI Chatbot** to ask any inquiry about Nathesh&apos;s background, skills, and projects.
          </motion.p>
        </div>

        {/* Live Interactive Q&A Prompt Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-4xl mx-auto p-6 md:p-8 rounded-3xl bg-gradient-to-br from-card/90 via-card/60 to-primary/5 border border-cyan-500/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(6,182,212,0.12)]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-primary flex items-center justify-center text-white shadow-lg">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Interactive Question-Response Chatbot</h3>
                <p className="text-sm text-muted-foreground">
                  Click any question below to communicate with the assistant instantly:
                </p>
              </div>
            </div>

            <Button
              onClick={() => openChatWithQuestion()}
              className="bg-gradient-to-r from-cyan-500 to-primary hover:opacity-90 text-white shadow-md rounded-xl"
            >
              <Bot className="w-4 h-4 mr-2" />
              Launch Assistant
            </Button>
          </div>

          {/* Quick Interactive Question Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {sampleQueries.map((item, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openChatWithQuestion(item.question)}
                className="text-left p-3.5 rounded-2xl bg-secondary/50 hover:bg-cyan-500/10 border border-border/80 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-cyan-500 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-xs text-foreground/90 font-medium leading-snug group-hover:text-cyan-400 transition-colors">
                  &ldquo;{item.question}&rdquo;
                </p>
                <div className="flex items-center gap-1 text-[11px] text-cyan-400 font-semibold mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Ask Chatbot</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Direct In-page Chatbot Input Bar */}
          <form onSubmit={handleFormSubmit} className="relative flex items-center gap-2">
            <input
              type="text"
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              placeholder="Ask anything (e.g. 'What ML algorithms has Nathesh used?' or 'How can I hire him?')..."
              className="flex-1 bg-secondary/80 border border-border/90 rounded-2xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            />
            <Button
              type="submit"
              className="h-11 px-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-primary text-white hover:opacity-90 shadow-md transition-all flex items-center gap-2"
            >
              <span>Ask AI</span>
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
