'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TypingTextProps {
  text: string
  delay?: number
  className?: string
}

export default function TypingText({ text, delay = 0, className = '' }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const startTime = setTimeout(() => {
      let currentIndex = 0

      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, 30)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTime)
  }, [text, delay])

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="text-cyan-400"
        >
          |
        </motion.span>
      )}
    </span>
  )
}
