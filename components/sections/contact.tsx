import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current!,
        {
          publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
        }
      )

      console.log('SUCCESS!', result.text)
      setSubmitted(true)
      
      // Reset form
      e.currentTarget.reset()
      
      // Show success message for 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
      
    } catch (error: any) {
      console.log('FAILED...', error.text)
      setSubmitError(error.text || 'Failed to send message. Please try again.')
      
      // Clear error after 5 seconds
      setTimeout(() => setSubmitError(null), 5000)
      
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-32" ref={ref}>
      <div className="absolute top-0 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-primary/25 via-accent/15 to-transparent rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-accent/20 via-primary/12 to-transparent rounded-full blur-[135px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-primary/8 to-accent/8 rounded-full blur-[170px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-balance text-center"
        >
          {"Let's Work Together"}
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind or want to collaborate? {"I'd"} love to hear from you. Send me a message and{" "}
                {"I'll"} respond as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">megaladevi2084@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 93612 55171</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Thevor,Salem</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  name="user_name"
                  placeholder="Your Name" 
                  required 
                  className="bg-secondary border-border" 
                />
                <Input 
                  type="email" 
                  name="user_email"
                  placeholder="Your Email" 
                  required 
                  className="bg-secondary border-border" 
                />
              </div>
              <Input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                required 
                className="bg-secondary border-border" 
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                className="bg-secondary border-border resize-none"
              />
              
              {/* Error Message */}
              {submitError && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
                  {submitError}
                </div>
              )}
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center gap-2">✓ Message Sent!</span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
