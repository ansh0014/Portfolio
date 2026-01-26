'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TechBadge {
  name: string
  color: string
  glowColor: string
  delay: number
}

const techBadges: TechBadge[] = [
  { name: 'Go', color: '#00d9ff', glowColor: 'rgba(0, 217, 255, 0.5)', delay: 0 },
  { name: 'C++', color: '#ff6b35', glowColor: 'rgba(255, 107, 53, 0.5)', delay: 0.5 },
  { name: 'Python', color: '#a855f7', glowColor: 'rgba(168, 85, 247, 0.5)', delay: 1 },
  { name: 'Docker', color: '#00d9ff', glowColor: 'rgba(0, 217, 255, 0.5)', delay: 1.5 },
  { name: 'Kubernetes', color: '#ff6b35', glowColor: 'rgba(255, 107, 53, 0.5)', delay: 2 },
  { name: 'PostgreSQL', color: '#a855f7', glowColor: 'rgba(168, 85, 247, 0.5)', delay: 2.5 },
  { name: 'Kafka', color: '#ff6b35', glowColor: 'rgba(255, 107, 53, 0.5)', delay: 3.5 },
]

const generateRandomPosition = (radius: number, seed: number) => {
  const angle = (seed * 360) % 360
  const r = radius * (0.6 + Math.random() * 0.4)
  const x = r * Math.cos((angle * Math.PI) / 180)
  const y = r * Math.sin((angle * Math.PI) / 180)
  return { x, y }
}

const generateFloatingPath = (initialX: number, initialY: number) => {
  const offsets = []
  for (let i = 0; i < 4; i++) {
    const offsetX = (Math.random() - 0.5) * 100
    const offsetY = (Math.random() - 0.5) * 100
    offsets.push({ x: initialX + offsetX, y: initialY + offsetY })
  }
  return offsets
}

export default function ElegantTechFloat() {
  const [pathsData, setPathsData] = useState<Array<any[]>>([])

  useEffect(() => {
    const paths = techBadges.map((_, index) => {
      const seed = index + 1
      const initialPos = generateRandomPosition(180, seed)
      return generateFloatingPath(initialPos.x, initialPos.y)
    })
    setPathsData(paths)
  }, [])

  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="-400 -400 800 800"
        style={{ filter: 'drop-shadow(0 0 30px rgba(0, 217, 255, 0.1))' }}
      >
        <circle cx="0" cy="0" r="160" fill="none" stroke="rgba(0, 217, 255, 0.1)" strokeWidth="1" />
        <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(255, 107, 53, 0.1)" strokeWidth="1" />
        <circle cx="0" cy="0" r="40" fill="none" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1" />

        <circle cx="0" cy="0" r="8" fill="#00d9ff" opacity="0.6" />
        <circle cx="0" cy="0" r="4" fill="#00d9ff" opacity="0.3" />
      </svg>

      {pathsData.length > 0 &&
        techBadges.map((badge, index) => {
          const path = pathsData[index]
          const initialPos = generateRandomPosition(180, index + 1)

          return (
            <motion.div
              key={badge.name}
              className="absolute"
              initial={{
                x: initialPos.x,
                y: initialPos.y,
              }}
              animate={{
                x: [
                  initialPos.x,
                  path[0]?.x || initialPos.x + 50,
                  path[1]?.x || initialPos.x - 50,
                  path[2]?.x || initialPos.x + 30,
                  path[3]?.x || initialPos.x,
                ],
                y: [
                  initialPos.y,
                  path[0]?.y || initialPos.y + 50,
                  path[1]?.y || initialPos.y - 50,
                  path[2]?.y || initialPos.y + 30,
                  path[3]?.y || initialPos.y,
                ],
              }}
              transition={{
                duration: 15 + index * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: badge.delay,
              }}
            >
              <motion.div
                className="flex items-center justify-center cursor-pointer"
                whileHover={{
                  scale: 1.2,
                  filter: `drop-shadow(0 0 30px ${badge.glowColor})`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="relative flex items-center justify-center px-5 py-3 rounded-full font-semibold text-sm backdrop-blur-sm border"
                  style={{
                    backgroundColor: `${badge.color}15`,
                    borderColor: badge.color,
                    color: badge.color,
                    boxShadow: `0 0 20px ${badge.glowColor}, inset 0 0 20px ${badge.glowColor}`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span className="relative z-10">{badge.name}</span>

                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `2px solid ${badge.color}`,
                      opacity: 0.3,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )
        })}
    </div>
  )
}
