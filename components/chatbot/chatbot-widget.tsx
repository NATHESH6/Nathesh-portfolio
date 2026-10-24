"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageSquare,
  Bot,
  User,
  X,
  Send,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Copy,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  ArrowRight,
  Maximize2,
  Minimize2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  matchUserQuery,
  INITIAL_SUGGESTIONS,
  ChatMessage,
  ChatAction,
  NATHESH_PROFILE,
} from "./chatbot-data"

// Sound effect synthesizer using Web Audio API
class ChatSound {
  private ctx: AudioContext | null = null

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume()
    }
    return this.ctx
  }

  playSend() {
    try {
      const ctx = this.getContext()
      if (!ctx) return
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = "sine"
      osc.frequency.setValueAtTime(520, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.12)
      gain.gain.setValueAtTime(0.06, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.12)
    } catch {
      // AudioContext disallowed or unavailable
    }
  }

  playReceive() {
    try {
      const ctx = this.getContext()
      if (!ctx) return
      const now = ctx.currentTime
      const osc1 = ctx.createOscillator()
      const osc2 = ctx.createOscillator()
      const gain = ctx.createGain()

      osc1.type = "triangle"
      osc2.type = "sine"
      osc1.frequency.setValueAtTime(440, now)
      osc2.frequency.setValueAtTime(880, now + 0.06)

      gain.gain.setValueAtTime(0.06, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22)

      osc1.connect(gain)
      osc2.connect(gain)
      gain.connect(ctx.destination)

      osc1.start(now)
      osc1.stop(now + 0.08)
      osc2.start(now + 0.06)
      osc2.stop(now + 0.22)
    } catch {
      // AudioContext disallowed or unavailable
    }
  }
}

const chatSound = new ChatSound()

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(true)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isListening, setIsListening] = useState(false)
  const [activeSuggestions, setActiveSuggestions] = useState<string[]>(INITIAL_SUGGESTIONS)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<any>(null)

  // Initialize initial greeting
  useEffect(() => {
    const initialGreeting: ChatMessage = {
      id: "initial-welcome",
      sender: "bot",
      text: `Hello! I'm **Nathesh's AI Portfolio Assistant** 🤖

I'm here to provide instant answers to your questions about:
• **Technical Skills** (Frontend, Backend, Python, ML, MySQL)
• **Featured Projects** (Phishing Email Blocker, Cyber Breach Prediction, Industrial ML)
• **Internship Experience** at Grandtwin & **CIETM-2026 Research**
• **Education, Certifications**, and **Hiring Information**

What would you like to know?`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      suggestions: [
        "Tell me about Nathesh",
        "What are his technical skills?",
        "Show featured projects",
        "How can I contact or hire him?",
      ],
      actions: [
        { label: "View Projects", type: "scroll", value: "#projects" },
        { label: "Download Resume", type: "download", value: NATHESH_PROFILE.resumePath },
        { label: "Contact Form", type: "scroll", value: "#contact" },
      ],
    }
    setMessages([initialGreeting])
  }, [])

  // Auto-scroll messages to bottom
  const scrollToBottom = useCallback((smooth = true) => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "end",
      })
    }
  }, [])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom()
    }
  }, [messages, isTyping, isOpen, isMinimized, scrollToBottom])

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 250)
    }
  }, [isOpen, isMinimized])

  // Listen to global open chat events (from navbar, buttons, etc.)
  useEffect(() => {
    const handleOpenChat = (event: Event) => {
      const customEvent = event as CustomEvent<{ query?: string }>
      setIsOpen(true)
      setIsMinimized(false)
      setHasUnread(false)
      setShowWelcomeBubble(false)

      if (customEvent.detail?.query) {
        handleSendMessage(customEvent.detail.query)
      }
    }

    window.addEventListener("open-portfolio-chat", handleOpenChat)
    return () => window.removeEventListener("open-portfolio-chat", handleOpenChat)
  }, [])

  // Setup Web Speech API for voice recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition()
        recognition.continuous = false
        recognition.interimResults = false
        recognition.lang = "en-US"

        recognition.onstart = () => setIsListening(true)
        recognition.onend = () => setIsListening(false)
        recognition.onerror = () => setIsListening(false)
        recognition.onresult = (e: any) => {
          const transcript = e.results[0][0].transcript
          if (transcript) {
            handleSendMessage(transcript)
          }
        }
        recognitionRef.current = recognition
      }
    }
  }, [])

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert("Voice input is not supported in this browser.")
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
    } else {
      try {
        recognitionRef.current.start()
      } catch (err) {
        console.error("Speech recognition error:", err)
      }
    }
  }

  // Handle action button clicks (scroll, link, download, prompt)
  const handleActionClick = (action: ChatAction) => {
    if (action.type === "scroll") {
      const target = document.querySelector(action.value)
      if (target) {
        const offset = 80
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    } else if (action.type === "download") {
      const link = document.createElement("a")
      link.href = action.value
      link.download = NATHESH_PROFILE.resumeFilename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else if (action.type === "url") {
      window.open(action.value, "_blank", "noopener,noreferrer")
    } else if (action.type === "prompt") {
      handleSendMessage(action.value)
    }
  }

  // Send a message
  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend ?? inputValue).trim()
    if (!query) return

    if (soundEnabled) chatSound.playSend()

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate smart thinking and natural response latency (450ms - 750ms)
    const delay = Math.min(800, Math.max(450, query.length * 15))
    setTimeout(() => {
      const match = matchUserQuery(query)

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: match.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actions: match.actions,
        suggestions: match.suggestions,
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)

      if (match.suggestions && match.suggestions.length > 0) {
        setActiveSuggestions(match.suggestions)
      }

      if (soundEnabled) chatSound.playReceive()
    }, delay)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const resetChat = () => {
    const resetGreeting: ChatMessage = {
      id: `bot-reset-${Date.now()}`,
      sender: "bot",
      text: "Conversation refreshed. What else would you like to know about Nathesh?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      suggestions: INITIAL_SUGGESTIONS.slice(0, 4),
    }
    setMessages([resetGreeting])
    setActiveSuggestions(INITIAL_SUGGESTIONS)
  }

  const copyMessage = (text: string, id: string) => {
    navigator.clipboard.writeText(text.replace(/\*\*/g, ""))
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const speakText = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return
    window.speechSynthesis.cancel() // stop any current utterance
    const cleanText = text.replace(/[*#•`]/g, "")
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.rate = 1.0
    utterance.pitch = 1.0
    window.speechSynthesis.speak(utterance)
  }

  // Render text with bold and link formatting
  const renderFormattedText = (content: string) => {
    // Split lines
    const lines = content.split("\n")
    return (
      <div className="space-y-1.5 text-[13.5px] leading-relaxed">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-1.5" />

          // Handle bullet point line
          const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-") || line.trim().startsWith("1.") || line.trim().startsWith("2.") || line.trim().startsWith("3.") || line.trim().startsWith("4.")

          // Process markdown bold (**text**) and links [text](url)
          const parts: (string | React.ReactNode)[] = []
          let remaining = line

          // Simple markdown parser
          const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g
          let lastIdx = 0
          let match: RegExpExecArray | null

          while ((match = regex.exec(remaining)) !== null) {
            if (match.index > lastIdx) {
              parts.push(remaining.substring(lastIdx, match.index))
            }
            const token = match[0]
            if (token.startsWith("**") && token.endsWith("**")) {
              parts.push(
                <strong key={`b-${idx}-${match.index}`} className="font-semibold text-foreground">
                  {token.slice(2, -2)}
                </strong>
              )
            } else if (token.startsWith("[")) {
              const linkMatch = token.match(/\[(.*?)\]\((.*?)\)/)
              if (linkMatch) {
                parts.push(
                  <a
                    key={`l-${idx}-${match.index}`}
                    href={linkMatch[2]}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline font-medium"
                  >
                    {linkMatch[1]}
                  </a>
                )
              }
            }
            lastIdx = match.index + token.length
          }

          if (lastIdx < remaining.length) {
            parts.push(remaining.substring(lastIdx))
          }

          return (
            <p
              key={idx}
              className={`${
                isBullet ? "pl-2 border-l-2 border-cyan-500/30 text-muted-foreground" : "text-foreground/90"
              }`}
            >
              {parts.length > 0 ? parts : line}
            </p>
          )
        })}
      </div>
    )
  }

  return (
    <>
      {/* 1. Floating Launch Trigger in Bottom-Right Corner */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end">
        {/* Welcome Teaser Bubble (shows initially to catch visitor attention) */}
        <AnimatePresence>
          {showWelcomeBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="mb-3 max-w-[260px] p-3 rounded-2xl bg-card/95 backdrop-blur-xl border border-cyan-500/40 text-xs shadow-[0_8px_30px_rgba(6,182,212,0.25)] relative group cursor-pointer"
              onClick={() => {
                setIsOpen(true)
                setShowWelcomeBubble(false)
                setHasUnread(false)
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowWelcomeBubble(false)
                }}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-background border border-border text-muted-foreground hover:text-foreground flex items-center justify-center text-[10px] shadow"
                aria-label="Dismiss bubble"
              >
                ✕
              </button>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-cyan-400 text-[11px] tracking-wide uppercase">
                  Nathesh AI Online
                </span>
              </div>
              <p className="text-muted-foreground leading-snug">
                Ask me anything about Nathesh&apos;s skills, ML projects, or hire him! 💬
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <motion.button
          onClick={() => {
            setIsOpen((prev) => !prev)
            setIsMinimized(false)
            setHasUnread(false)
            setShowWelcomeBubble(false)
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-gradient-to-tr from-cyan-600 via-primary to-indigo-600 text-white shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.65)] transition-all duration-300 group cursor-pointer border border-cyan-300/40"
          aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
          title="Interactive Question-Response Chatbot"
        >
          {/* Subtle Rotating Gradient Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-indigo-400/30 to-purple-400/30 blur-sm -z-10 group-hover:blur-md transition-all animate-pulse" />

          {/* Unread Ping Dot */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-background" />
            </span>
          )}

          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform group-hover:rotate-90 duration-300" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 absolute -top-1 -right-1 animate-bounce" />
            </div>
          )}
        </motion.button>
      </div>

      {/* 2. Interactive Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "68px" : "590px",
            }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className={`fixed bottom-24 right-4 sm:right-6 md:right-8 z-50 w-[94vw] sm:w-[430px] max-w-[450px] bg-background/95 dark:bg-[#070e1b]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] dark:shadow-[0_20px_60px_rgba(6,182,212,0.18)] flex flex-col overflow-hidden transition-all duration-300`}
            style={{ maxHeight: isMinimized ? "68px" : "84vh" }}
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/30 select-none">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-primary flex items-center justify-center text-white shadow-md">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-background animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-sm text-foreground">Nathesh AI</h3>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-mono">
                      Q&A Assistant
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online • Instant Answers
                  </p>
                </div>
              </div>

              {/* Header Action Icons */}
              <div className="flex items-center gap-1 text-muted-foreground">
                {/* Sound Toggle */}
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-1.5 rounded-lg hover:bg-secondary hover:text-foreground transition-colors ${
                    soundEnabled ? "text-cyan-400" : "text-muted-foreground/60"
                  }`}
                  title={soundEnabled ? "Mute sound effects" : "Enable sound effects"}
                  aria-label="Toggle sound"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Reset Chat */}
                <button
                  onClick={resetChat}
                  className="p-1.5 rounded-lg hover:bg-secondary hover:text-foreground transition-colors"
                  title="Clear conversation"
                  aria-label="Reset conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Minimize */}
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 rounded-lg hover:bg-secondary hover:text-foreground transition-colors"
                  title={isMinimized ? "Expand" : "Minimize"}
                  aria-label="Minimize or Expand"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>

                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-secondary hover:text-destructive transition-colors ml-1"
                  title="Close chat"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body (Hidden when minimized) */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-border">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div className="flex items-end gap-2 max-w-[90%]">
                        {msg.sender === "bot" && (
                          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-600 to-primary text-white flex items-center justify-center text-xs flex-shrink-0 mb-1 shadow-sm">
                            <Bot className="w-4 h-4" />
                          </div>
                        )}

                        <div
                          className={`group relative rounded-2xl px-3.5 py-2.5 shadow-sm ${
                            msg.sender === "user"
                              ? "bg-gradient-to-r from-primary to-accent text-white rounded-br-none"
                              : "bg-card/90 border border-border/80 text-card-foreground rounded-bl-none shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                          }`}
                        >
                          {msg.sender === "bot" ? (
                            <div>{renderFormattedText(msg.text)}</div>
                          ) : (
                            <p className="text-[13.5px] leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                          )}

                          {/* Quick Message Actions (Copy & TTS for Bot) */}
                          {msg.sender === "bot" && (
                            <div className="mt-2 pt-1.5 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                              <span className="font-mono text-[10px] opacity-70">{msg.timestamp}</span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => copyMessage(msg.text, msg.id)}
                                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                                  title="Copy response"
                                >
                                  {copiedId === msg.id ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-400" />
                                      <span className="text-[10px] text-emerald-400">Copied</span>
                                    </>
                                  ) : (
                                    <Copy className="w-3 h-3" />
                                  )}
                                </button>
                                <button
                                  onClick={() => speakText(msg.text)}
                                  className="hover:text-cyan-400 transition-colors"
                                  title="Listen to response"
                                >
                                  <Volume2 className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          )}

                          {msg.sender === "user" && (
                            <div className="text-[10px] text-white/70 text-right mt-1 font-mono">
                              {msg.timestamp}
                            </div>
                          )}
                        </div>

                        {msg.sender === "user" && (
                          <div className="w-7 h-7 rounded-xl bg-secondary border border-border flex items-center justify-center text-xs flex-shrink-0 mb-1">
                            <User className="w-4 h-4 text-primary" />
                          </div>
                        )}
                      </div>

                      {/* Interactive Action Buttons Attached to Bot Response */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2 ml-9">
                          {msg.actions.map((action, aIdx) => (
                            <motion.button
                              key={aIdx}
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.96 }}
                              onClick={() => handleActionClick(action)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 dark:text-cyan-300 border border-cyan-500/30 transition-all duration-200 shadow-sm"
                            >
                              {action.type === "download" && <Download className="w-3 h-3" />}
                              {action.type === "url" && <ExternalLink className="w-3 h-3" />}
                              {action.type === "scroll" && <ArrowRight className="w-3 h-3" />}
                              <span>{action.label}</span>
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 ml-1"
                    >
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-600 to-primary text-white flex items-center justify-center text-xs">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-card border border-border rounded-2xl rounded-bl-none px-4 py-2.5 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                        <span className="text-xs text-muted-foreground ml-2 font-mono">Thinking...</span>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Suggestion Pills */}
                <div className="px-3 py-2 border-t border-border/40 bg-muted/20">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1 flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Suggested:
                    </span>
                    {activeSuggestions.map((suggestion, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSendMessage(suggestion)}
                        className="text-xs px-2.5 py-1 rounded-full bg-background border border-border/80 hover:border-cyan-400 hover:text-cyan-400 text-muted-foreground transition-all duration-200 whitespace-nowrap flex-shrink-0"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Bar */}
                <div className="p-3 border-t border-border/60 bg-background/80">
                  <div className="relative flex items-center gap-2">
                    {/* Voice Input Button */}
                    <button
                      type="button"
                      onClick={toggleVoiceInput}
                      className={`p-2 rounded-xl transition-all ${
                        isListening
                          ? "bg-red-500 text-white animate-pulse"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                      title={isListening ? "Listening... Click to stop" : "Speak your question"}
                      aria-label="Voice input"
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>

                    {/* Text Input Field */}
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={isListening ? "Listening to your voice..." : "Ask any question about Nathesh..."}
                      className="flex-1 bg-secondary/70 border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                      disabled={isTyping}
                    />

                    {/* Send Button */}
                    <Button
                      type="button"
                      size="icon"
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim() || isTyping}
                      className="rounded-xl h-9 w-9 bg-gradient-to-r from-cyan-500 to-primary text-white hover:opacity-90 disabled:opacity-40 transition-all shadow-md"
                      aria-label="Send query"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mt-1.5 px-1">
                    <span className="text-[10px] text-muted-foreground">
                      Press <kbd className="px-1 py-0.5 rounded bg-muted text-[9px] font-mono">Enter ↵</kbd> to send
                    </span>
                    <span className="text-[10px] text-cyan-500/80 font-mono">
                      Powered by Nathesh Portfolio AI
                    </span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
