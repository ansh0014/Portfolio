'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import TypingText from '@/components/animations/TypingText'
import FallingBinary from '@/components/animations/FallingBinary'
import Particles from '@/components/animations/Particles'
import ElegantTechFloat from '@/components/animations/ElegantTechFloat'
import TechArc from '@/components/animations/TechArc'
import { useState } from 'react'
import { JSX } from 'react/jsx-runtime'

const passionText = `I'm passionate about building scalable backend systems that can handle 10,000+ concurrent users without breaking a sweat. In today's AI-driven world, I specialize in backend engineering that doesn't just work—it solves real-world problems at scale.

I love working with the fundamentals—the 0s and 1s that power everything we do. Whether it's crafting low-level systems in C++ or architecting microservices in Go, I build the invisible infrastructure that makes modern applications possible.

For me, engineering isn't just about getting a degree or writing perfect code. It's about using your skills to solve real-world problems that impact people's lives. It's about understanding what users need, seeing the challenges businesses face, and building solutions that actually make a difference in the real world.

I believe great engineering is about creating systems that serve a purpose—whether it's helping thousands access services faster, making complex processes simpler, or building infrastructure that empowers others to solve their own problems.`

export default function Hero() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null)

  const highlightedPhrases: { [key: string]: string } = {
    '10,000+ concurrent users': 'orange',
    '0s and 1s': 'cyan',
    'low-level systems': 'cyan',
    'microservices in Go': 'cyan',
    '100 to 100,000 users': 'orange',
    'distributed systems': 'cyan',
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderHighlightedText = (text: string) => {
    let lastIndex = 0
    const parts: (string | JSX.Element)[] = []

    Object.keys(highlightedPhrases).forEach(phrase => {
      const index = text.indexOf(phrase)
      if (index !== -1) {
        const before = text.substring(lastIndex, index)
        if (before) parts.push(before)

        parts.push(
          <span
            key={phrase}
            className={`font-semibold ${highlightedPhrases[phrase] === 'orange'
              ? 'text-orange-500'
              : 'text-cyan-400'
              }`}
          >
            {phrase}
          </span>
        )

        lastIndex = index + phrase.length
      }
    })

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-20 pb-32 overflow-hidden flex items-center justify-center"
    >
      <FallingBinary />
      <Particles />

      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen">
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-400 text-base font-medium">Hi, I&apos;m</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-7xl md:text-8xl font-extrabold"
            >
              <TypingText text="Anshul Jagota" className="text-portfolio-title" delay={200} />
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-400 font-medium"
            >
              Backend Engineer | DevOps | System Design | Low-Level Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="card-glass rounded-xl p-8 max-w-2xl"
            >
              <div className="text-gray-300 space-y-5 text-lg leading-relaxed">
                {passionText.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-400">
                    {renderHighlightedText(paragraph)}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/projects" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-9 py-4 bg-cyan-400 text-black font-semibold rounded-lg glow-cyan hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                >
                  View My Work
                </motion.button>
              </Link>

              <Link href="/contact" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-9 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-black transition-all duration-300 glow-orange w-full sm:w-auto"
                >
                  Let&apos;s Connect
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center relative h-full min-h-[600px] w-full">
            <TechArc />
          </div>
        </div>
      </div>

      <Link href="/skills">
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
            <span className="text-xs text-gray-400 hidden sm:block">Scroll to explore</span>
          </div>
        </motion.div>
      </Link>
    </section >
  )
}
