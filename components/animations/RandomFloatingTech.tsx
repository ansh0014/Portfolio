'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TechBadge {
    name: string
    color: string
}

const techBadges: TechBadge[] = [
    { name: 'Go', color: '#00d9ff' },
    { name: 'C++', color: '#ff6b35' },
    { name: 'Python', color: '#a855f7' },
    { name: 'Docker', color: '#00d9ff' },
    { name: 'Kubernetes', color: '#ff6b35' },
    { name: 'PostgreSQL', color: '#a855f7' },
    { name: 'Kafka', color: '#ff6b35' },
]

export default function RandomFloatingTech() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className="relative w-full h-full min-h-[600px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-orange-500/5 opacity-30 blur-3xl" />

            {techBadges.map((tech, index) => (
                <FloatingItem key={tech.name} tech={tech} index={index} />
            ))}
        </div>
    )
}

function FloatingItem({ tech, index }: { tech: TechBadge; index: number }) {
    const randomX = Math.random() * 100 // initial random position
    const randomY = Math.random() * 100

    // Generate random floating path
    const generatePath = () => {
        return Array.from({ length: 5 }, () => ({
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
        }))
    }

    return (
        <motion.div
            className="absolute"
            initial={{
                x: `${Math.random() * 80 + 10}%`,
                y: `${Math.random() * 80 + 10}%`,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: generatePath().map(p => p.x),
                y: generatePath().map(p => p.y),
                opacity: [0, 1, 1, 1, 0.8],
                scale: [1, 1.1, 0.9, 1.05, 1],
            }}
            transition={{
                duration: 25 + Math.random() * 15, // Slow, elegant movement
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: index * 0.5,
            }}
            style={{
                left: 0,
                top: 0,
            }}
        >
            <motion.div
                className="px-6 py-3 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl flex items-center gap-3 group cursor-pointer hover:border-white/30 transition-colors"
                whileHover={{ scale: 1.2, zIndex: 50 }}
                style={{
                    background: `linear-gradient(135deg, ${tech.color}10, transparent)`,
                    boxShadow: `0 0 30px ${tech.color}20`,
                }}
            >
                <span
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
                    style={{
                        textShadow: `0 0 20px ${tech.color}40`,
                        // Fallback for text stroke if needed, but glow is better
                    }}
                >
                    {tech.name}
                </span>
            </motion.div>
        </motion.div>
    )
}
