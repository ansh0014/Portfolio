'use client'

import { motion } from 'framer-motion'

interface FloatingBadge {
  label: string
  delay: number
  duration: number
  x: number
  y: number
  color: string
}

const badges: FloatingBadge[] = [
  { label: 'Go', delay: 0, duration: 6, x: -120, y: -80, color: 'bg-cyan-400' },
  { label: 'C++', delay: 0.3, duration: 7, x: 120, y: -60, color: 'bg-cyan-400' },
  { label: 'Python', delay: 0.6, duration: 6.5, x: -100, y: 80, color: 'bg-orange-500' },
  { label: 'Docker', delay: 0.9, duration: 7.5, x: 110, y: 90, color: 'bg-orange-500' },
  { label: 'Kubernetes', delay: 1.2, duration: 6, x: 0, y: -140, color: 'bg-purple-500' },
  { label: 'PostgreSQL', delay: 1.5, duration: 7, x: -140, y: 0, color: 'bg-purple-500' },
  { label: 'Redis', delay: 1.8, duration: 6.5, x: 130, y: 0, color: 'bg-cyan-400' },
  { label: 'gRPC', delay: 2.1, duration: 7, x: 0, y: 140, color: 'bg-orange-500' },
]

export default function FloatingTechStack() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <div className="absolute w-48 h-48 border-2 border-cyan-400/20 rounded-full" />
      <div className="absolute w-32 h-32 border border-orange-500/20 rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full border border-cyan-400/40 flex items-center justify-center backdrop-blur-sm"
      >
        <span className="text-xs font-bold text-white">DEV</span>
      </motion.div>

      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [0, badge.x, 0],
            y: [0, badge.y, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            delay: badge.delay,
            duration: badge.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute px-3 py-2 rounded-full ${badge.color} text-xs font-bold text-white shadow-lg backdrop-blur-sm border border-white/20`}
        >
          {badge.label}
        </motion.div>
      ))}
    </div>
  )
}
