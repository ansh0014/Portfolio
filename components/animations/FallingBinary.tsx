'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface BinaryElement {
  id: string
  character: '0' | '1'
  x: number
  initialY: number
  duration: number
  size: number
  color: '#00d9ff' | '#ff6b35'
  opacity: number
  delay: number
}

export default function FallingBinary() {
  const [elements, setElements] = useState<BinaryElement[]>([])

  useEffect(() => {
    const createElement = (): BinaryElement => {
      const colors: Array<'#00d9ff' | '#ff6b35'> = ['#00d9ff', '#ff6b35']
      const sizes = [24, 32, 40]
      const durations = [2, 2.5, 3, 3.5, 4, 4.5, 5]

      return {
        id: Math.random().toString(36).substr(2, 9),
        character: Math.random() > 0.5 ? '0' : '1',
        x: Math.random() * 100,
        initialY: -50,
        duration: durations[Math.floor(Math.random() * durations.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.4,
        delay: Math.random() * 2,
      }
    }

    const initialElements = Array.from({ length: 20 }, () => createElement())
    setElements(initialElements)

    const interval = setInterval(() => {
      setElements(prev => {
        const updated = [...prev.slice(1)]
        updated.push(createElement())
        return updated
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const getGlowColor = (color: string) => {
    return color === '#00d9ff' ? 'rgba(0, 217, 255, 0.5)' : 'rgba(255, 107, 53, 0.5)'
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map(el => (
        <motion.div
          key={el.id}
          className="absolute font-mono font-bold"
          style={{
            left: `${el.x}%`,
            top: `${el.initialY}%`,
            fontSize: el.size,
            color: el.color,
            opacity: el.opacity,
            textShadow: `0 0 10px ${getGlowColor(el.color)}`,
            zIndex: 1,
          }}
          animate={{
            y: window.innerHeight + 100,
          }}
          transition={{
            duration: el.duration,
            ease: 'linear',
            delay: el.delay,
          }}
        >
          {el.character}
        </motion.div>
      ))}
    </div>
  )
}
