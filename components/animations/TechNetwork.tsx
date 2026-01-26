'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Particle {
  id: number
  label: string
  angle: number
  distance: number
  color: string
  speed: number
}

const particles: Particle[] = [
  { id: 1, label: 'Go', angle: 0, distance: 250, color: '#00d9ff', speed: 0.02 },
  { id: 2, label: 'C++', angle: 51.4, distance: 250, color: '#ff6b35', speed: 0.025 },
  { id: 3, label: 'Python', angle: 102.8, distance: 250, color: '#a855f7', speed: 0.02 },
  { id: 4, label: 'Docker', angle: 154.2, distance: 250, color: '#00d9ff', speed: 0.022 },
  { id: 5, label: 'Kubernetes', angle: 205.6, distance: 250, color: '#ff6b35', speed: 0.025 },
  { id: 6, label: 'PostgreSQL', angle: 257, distance: 250, color: '#a855f7', speed: 0.02 },
  { id: 8, label: 'Kafka', angle: 308.4, distance: 250, color: '#ff6b35', speed: 0.021 },
]

export default function TechNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 600
    canvas.height = 600

    let animationId: number
    let rotation = 0

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      rotation += 0.3

      const positions = particles.map(p => {
        const angle = (p.angle + rotation * p.speed) * (Math.PI / 180)
        const x = centerX + Math.cos(angle) * p.distance
        const y = centerY + Math.sin(angle) * p.distance
        return { x, y, ...p }
      })

      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const p1 = positions[i]
          const p2 = positions[j]
          const distance = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2)

          if (distance < 200) {
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - distance / 200)})`
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      positions.forEach(p => {
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = p.color
        ctx.lineWidth = 2
        ctx.globalAlpha = 0.3
        ctx.beginPath()
        ctx.arc(p.x, p.y, 14, 0, Math.PI * 2)
        ctx.stroke()
        ctx.globalAlpha = 1

        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
        ctx.font = 'bold 12px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(p.label, p.x, p.y)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="w-full max-w-2xl"
        style={{
          filter: 'drop-shadow(0 0 30px rgba(0, 217, 255, 0.2))',
        }}
      />
    </motion.div>
  )
}
