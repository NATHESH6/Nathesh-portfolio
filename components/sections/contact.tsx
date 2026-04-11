"use client"

import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef(null)
  const form = useRef()
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // 🔴 replace
        "YOUR_TEMPLATE_ID",    // 🔴 replace
        form.current,
        "YOUR_PUBLIC_KEY"      // 🔴 replace
      )
      .then(
        () => {
          setIsSubmitting(false)
          setSubmitted(true)
          form.current.reset()

          setTimeout(() => setSubmitted(false), 3000)
        },
        (error) => {
          console.log("FAILED...", error.text)
          setIsSubmitting(false)
        }
      )
  }

  return (
    <section id="contact" className="relative py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          Let's Work Together
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground">
                Have a project in mind? Send me a message.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Mail /> <span>your@email.com</span>
              </div>
              <div className="flex gap-4">
                <Phone /> <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex gap-4">
                <MapPin /> <span>Your Location</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <Input name="user_name" type="text" placeholder="Your Name" required />
                <Input name="user_email" type="email" placeholder="Your Email" required />
              </div>

              <Input name="subject" type="text" placeholder="Subject" required />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  "Sending..."
                ) : submitted ? (
                  "✅ Message Sent!"
                ) : (
                  <span className="flex items-center justify-center gap-2">
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