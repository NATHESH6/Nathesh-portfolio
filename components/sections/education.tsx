"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science  And Engineering",
    institution: "Coimbatore Institute of Engineering and Technology",
    period: "2023 - 2026",
    status: "Currently Pursuing",
    cgpa: "6.48",
    progress: 60,
    icon: GraduationCap,
    color: "purple",
  },
  {
    degree: "Diploma in Computer Technology",
    field: "Computer Technology",
    institution: "Kongu Polytechnic College",
    period: "2020 - 2023",
    status: "Completed",
    percentage: "91%",
    icon: Award,
    color: "cyan",
  },
  {
    degree: "Secondary School (SSLC)",
    field: "Secondary Education",
    institution: "Sri Sakthi Supreme Ideal Vikas Matric HR Sec School",
    period: "Completed 2020",
    status: "Completed",
    percentage: "62%",
    icon: BookOpen,
    color: "orange",
  },
]

const stats = [
  { value: "6.48", label: "Current CGPA", color: "pink" },
  { value: "91%", label: "Diploma Grade", color: "orange" },
  { value: "62.8%", label: "SSLC Percentage", color: "purple" }
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="relative py-20 md:py-32" ref={ref}>
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-cyan-500/10 to-transparent rounded-full blur-[140px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-pink-500/10 via-orange-500/10 to-transparent rounded-full blur-[130px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-balance text-center"
        >
          Education
        </motion.h2>

        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-32 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 via-pink-500 to-orange-500 md:transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {education.map((item, index) => {
              const colorClasses = {
                purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
                cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
                pink: "bg-pink-500/10 border-pink-500/30 text-pink-400",
                orange: "bg-orange-500/10 border-orange-500/30 text-orange-400",
              }
              const iconBgClasses = {
                purple: "bg-purple-500/20",
                cyan: "bg-cyan-500/20",
                pink: "bg-pink-500/20",
                orange: "bg-orange-500/20",
              }

              // Alternating layout: even indices on left, odd indices on right
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative md:grid md:grid-cols-2 gap-8 items-center ${isLeft ? "" : "md:grid-flow-dense"}`}
                >
                  <div
                    className="absolute left-6 md:left-1/2 top-8 w-3 h-3 rounded-full border-2 border-background md:transform md:-translate-x-1/2 z-10"
                    style={{
                      backgroundColor:
                        item.color === "purple"
                          ? "#a855f7"
                          : item.color === "cyan"
                            ? "#06b6d4"
                            : item.color === "pink"
                              ? "#ec4899"
                              : "#f97316",
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-75"
                      style={{
                        backgroundColor:
                          item.color === "purple"
                            ? "#a855f7"
                            : item.color === "cyan"
                              ? "#06b6d4"
                              : item.color === "pink"
                                ? "#ec4899"
                                : "#f97316",
                      }}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`relative group ml-16 md:ml-0 ${isLeft ? "md:col-start-1" : "md:col-start-2"}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
                    <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl ${iconBgClasses[item.color as keyof typeof iconBgClasses]}`}>
                          <item.icon
                            className={`h-6 w-6 ${colorClasses[item.color as keyof typeof colorClasses].split(" ")[2]}`}
                          />
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${colorClasses[item.color as keyof typeof colorClasses]}`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="text-right text-sm text-muted-foreground mb-3">{item.period}</div>

                      <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.field}</p>

                      <div className="flex items-start gap-2 mb-4">
                        <svg
                          className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.institution}</p>
                      </div>

                      {item.cgpa && (
                        <p
                          className={`text-lg font-semibold mb-3 ${colorClasses[item.color as keyof typeof colorClasses].split(" ")[2]}`}
                        >
                          CGPA: {item.cgpa}
                        </p>
                      )}
                      {item.percentage && (
                        <p
                          className={`text-lg font-semibold mb-3 ${colorClasses[item.color as keyof typeof colorClasses].split(" ")[2]}`}
                        >
                          Percentage: {item.percentage}
                        </p>
                      )}

                      {item.progress && (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Progress</span>
                            <span
                              className={`text-sm font-medium ${colorClasses[item.color as keyof typeof colorClasses].split(" ")[2]}`}
                            >
                              In Progress
                            </span>
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${item.progress}%` } : {}}
                              transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: item.color === "purple" ? "#a855f7" : "#06b6d4" }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Empty space for the other side */}
                  <div className={`hidden md:block ${isLeft ? "md:col-start-2" : "md:col-start-1"}`} />
                </motion.div>
              )
            })}
          </div>

          {/* Statistics section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 md:mt-20"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 rounded-2xl blur-2xl" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {stats.map((stat, index) => {
                    const colorClasses = {
                      purple: "text-purple-400",
                      cyan: "text-cyan-400",
                      pink: "text-pink-400",
                    }
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                        className="text-center"
                      >
                        <div
                          className={`text-4xl md:text-5xl font-bold mb-2 ${colorClasses[stat.color as keyof typeof colorClasses]}`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
