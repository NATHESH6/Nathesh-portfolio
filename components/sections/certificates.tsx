"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const certificates = [
  {
    title: "Complete basic python",
    issuer: "Digilabs",
    date: "2024",
    image: "/Compleate basic python.png",
  },
  {
    title: "Technical events",
    issuer: "Karpagam college of engineering",
    date: "2024",
    image: "/Technical events.jpg",
  },
  {
    title: "Fundamentals of deep learning",
    issuer: "Nvida",
    date: "2024",
    image: "/react-certificate.jpg",
  },
  {
    title: "Service technician",
    issuer: "Kongu polytechnic college",
    date: "2023",
    image: "/IMG_20251205_155650.jpg",
  },
  {
    title: "Soft Skills Enrichment program by IBMers Govindon G & Prajesh Jayaraman",
    issuer: "IBM",
    date: "2024",
    image: "/3d-graphics-certificate.jpg",
  },
  {
    title: "Web Development using PHP Programming and MySQL",
    issuer: "Infosys",
    date: "2025",
    image: "/typescript-certificate.jpg",
  },
]

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certificates" className="relative py-20 md:py-32" ref={ref}>
      <div className="absolute top-1/3 left-1/4 w-[470px] h-[470px] bg-gradient-to-br from-accent/22 via-primary/12 to-transparent rounded-full blur-[125px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[430px] h-[430px] bg-gradient-to-tl from-primary/16 to-transparent rounded-full blur-[115px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-balance text-center"
        >
          Certificates & Achievements
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div whileHover={{ scale: 1.03, y: -5 }} className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-all">
                      <Award className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                      <ExternalLink className="absolute top-6 right-6 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <div className="space-y-4">
                   <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-full rounded-lg" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-muted-foreground">
                        Issued by {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
