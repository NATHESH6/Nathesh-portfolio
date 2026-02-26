"use client"

import { useEffect, useRef } from "react"

export default function Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let animationFrameId: number
    const container = containerRef.current
    if (!container) return

    // Create a simple canvas-based 3D-like animation
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    container.appendChild(canvas)

    const resize = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Create floating cubes effect
    const cubes: Array<{
      x: number
      y: number
      z: number
      rotationX: number
      rotationY: number
      size: number
      speedX: number
      speedY: number
      speedRot: number
    }> = []

    for (let i = 0; i < 5; i++) {
      cubes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 500 + 100,
        rotationX: 0,
        rotationY: 0,
        size: Math.random() * 60 + 40,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        speedRot: (Math.random() - 0.5) * 0.02,
      })
    }

    const animate = () => {
      if (!ctx) return
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      cubes.forEach((cube) => {
        cube.x += cube.speedX
        cube.y += cube.speedY
        cube.rotationX += cube.speedRot
        cube.rotationY += cube.speedRot

        // Bounce off edges
        if (cube.x < 0 || cube.x > canvas.width) cube.speedX *= -1
        if (cube.y < 0 || cube.y > canvas.height) cube.speedY *= -1

        // Draw cube (simplified 2D projection)
        ctx.save()
        ctx.translate(cube.x, cube.y)
        ctx.rotate(cube.rotationX)

        const scale = 500 / cube.z
        const size = cube.size * scale

        // Create gradient
        const gradient = ctx.createLinearGradient(-size / 2, -size / 2, size / 2, size / 2)
        gradient.addColorStop(0, "rgba(147, 112, 219, 0.6)")
        gradient.addColorStop(1, "rgba(64, 224, 208, 0.6)")

        ctx.fillStyle = gradient
        ctx.strokeStyle = "rgba(147, 112, 219, 0.8)"
        ctx.lineWidth = 2

        // Draw cube face
        ctx.beginPath()
        ctx.rect(-size / 2, -size / 2, size, size)
        ctx.fill()
        ctx.stroke()

        // Draw inner square for 3D effect
        ctx.strokeStyle = "rgba(64, 224, 208, 0.4)"
        ctx.beginPath()
        ctx.rect(-size / 4, -size / 4, size / 2, size / 2)
        ctx.stroke()

        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [])

  return <div ref={containerRef} className="w-full min-h-full" />
}
