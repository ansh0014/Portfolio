'use client'

import { motion } from 'framer-motion'
import {
    Container,
    Database,
    Server,
    Cpu,
    Cloud,
    GitBranch,
    Shield,
    Code2,
    Terminal,
} from 'lucide-react'
import { useState } from 'react'

interface TechBadge {
    name: string
    icon: React.ReactNode
    color: string
}

const techBadges: TechBadge[] = [
    { name: 'Go', icon: <Terminal size={32} />, color: '#00d9ff' },
    { name: 'C++', icon: <Code2 size={32} />, color: '#ff6b35' },
    { name: 'Python', icon: <Code2 size={32} />, color: '#a855f7' },
    { name: 'Docker', icon: <Container size={32} />, color: '#00d9ff' },
    { name: 'Kubernetes', icon: <Server size={32} />, color: '#ff6b35' },
    { name: 'PostgreSQL', icon: <Database size={32} />, color: '#a855f7' },
    { name: 'Kafka', icon: <Cloud size={32} />, color: '#ff6b35' },
]

export default function TechArc() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    // Arc configuration
    const radius = 300 // Radius of the arc
    const startAngle = -60 // Starting angle in degrees (bottom-rightish)
    const endAngle = 60 // Ending angle (top-rightish)
    const totalAngle = endAngle - startAngle

    return (
        <div className="relative w-full h-full min-h-[600px] flex items-center justify-center">
            {/* Decorative Arc Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
                <path
                    d={`M ${400 + Math.cos(startAngle * Math.PI / 180) * radius} ${300 + Math.sin(startAngle * Math.PI / 180) * radius} 
               A ${radius} ${radius} 0 0 1 ${400 + Math.cos(endAngle * Math.PI / 180) * radius} ${300 + Math.sin(endAngle * Math.PI / 180) * radius}`}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00d9ff" />
                        <stop offset="100%" stopColor="#ff6b35" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="relative w-[800px] h-[600px]">
                {techBadges.map((tech, index) => {
                    // Calculate position along the arc
                    // We distribute them evenly between start and end angle
                    const step = totalAngle / (techBadges.length - 1)
                    const angleDeg = startAngle + step * index
                    const angleRad = (angleDeg * Math.PI) / 180

                    // Center of the arc is roughly roughly at x=200, y=300 relative to container for right-side curve
                    // Adjust center point to position the arc nicely on the right side
                    const centerX = 100
                    const centerY = 300

                    const x = centerX + radius * Math.cos(angleRad)
                    const y = centerY + radius * Math.sin(angleRad)

                    return (
                        <motion.div
                            key={tech.name}
                            className="absolute"
                            style={{
                                left: x,
                                top: y,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <motion.div
                                className="flex items-center gap-3 cursor-pointer group"
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                whileHover={{ scale: 1.1 }}
                                animate={{
                                    y: [0, -10, 0], // Gentle float
                                }}
                                transition={{
                                    y: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2, // Staggered float
                                    }
                                }}
                            >
                                {/* Icon Container */}
                                <div
                                    className={`p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 group-hover:border-${tech.color} group-hover:shadow-[0_0_20px_${tech.color}40]`}
                                    style={{
                                        borderColor: hoveredIndex === index ? tech.color : 'rgba(255,255,255,0.1)',
                                        boxShadow: hoveredIndex === index ? `0 0 20px ${tech.color}40` : 'none'
                                    }}
                                >
                                    <div style={{ color: tech.color }}>
                                        {tech.icon}
                                    </div>
                                </div>

                                {/* Label */}
                                <span
                                    className="text-xl font-bold text-gray-200 tracking-wide opacity-80 group-hover:opacity-100 transition-opacity"
                                    style={{
                                        textShadow: hoveredIndex === index ? `0 0 10px ${tech.color}` : 'none'
                                    }}
                                >
                                    {tech.name}
                                </span>
                            </motion.div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
