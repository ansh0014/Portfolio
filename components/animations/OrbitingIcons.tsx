'use client'

import React from "react"

import { motion } from 'framer-motion'
import {
  Container,
  Database,
  Server,
  Cpu,
  Cloud,
  GitBranch,
  Shield,
} from 'lucide-react'
import { useState } from 'react'

interface TechIcon {
  name: string
  icon: React.ReactNode
  color: string
  angle: number
}

const techIcons: TechIcon[] = [
  { name: 'Docker', icon: <Container size={48} />, color: '#00d9ff', angle: 0 },
  { name: 'Kubernetes', icon: <Server size={48} />, color: '#ff6b35', angle: 51.4 },
  { name: 'MongoDB', icon: <Database size={48} />, color: '#00d9ff', angle: 102.8 },
  { name: 'PostgreSQL', icon: <Database size={48} />, color: '#ff6b35', angle: 154.2 },
  { name: 'Redis', icon: <Cpu size={48} />, color: '#00d9ff', angle: 205.6 },
  { name: 'Go', icon: <GitBranch size={48} />, color: '#ff6b35', angle: 257 },
  { name: 'C++', icon: <Shield size={48} />, color: '#00d9ff', angle: 308.4 },
]

export default function OrbitingIcons() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {techIcons.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute cursor-pointer"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20 + index * 0.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: '560px',
            height: '560px',
          }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: '48px',
              height: '48px',
            }}
            animate={{
              y: hoveredIcon === tech.name ? -15 : 0,
            }}
            onHoverStart={() => setHoveredIcon(tech.name)}
            onHoverEnd={() => setHoveredIcon(null)}
            whileHover={{
              scale: 1.3,
            }}
          >
            <div
              className="w-12 h-12 rounded-lg bg-black/40 backdrop-blur border border-cyan-500/30 flex items-center justify-center transition-all duration-300 hover:border-cyan-400/80 hover:shadow-lg"
              style={{
                color: tech.color,
                boxShadow:
                  hoveredIcon === tech.name
                    ? `0 0 30px ${tech.color}`
                    : `0 0 15px ${tech.color}`,
              }}
            >
              {tech.icon}
            </div>
            {hoveredIcon === tech.name && (
              <motion.div
                className="absolute top-16 left-1/2 -translate-x-1/2 text-xs font-medium text-white whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {tech.name}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
