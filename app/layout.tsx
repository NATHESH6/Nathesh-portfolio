import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Nathesh - Interactive Web Developer Portfolio",
  description:
    "A highly interactive, visually rich personal portfolio website showcasing projects, skills, and experience",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUf136l_VcrgXOPhmq0ehnJyg-2Bi5KDozMw&s",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUf136l_VcrgXOPhmq0ehnJyg-2Bi5KDozMw&s",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUf136l_VcrgXOPhmq0ehnJyg-2Bi5KDozMw&s",
        type: "image/svg+xml",
      },
    ],
    apple: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUf136l_VcrgXOPhmq0ehnJyg-2Bi5KDozMw&s",
  },
}
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
