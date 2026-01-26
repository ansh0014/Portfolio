'use client'

import React from "react"

import { motion } from 'framer-motion'
import { Code2, Zap, Layers, Database, Cloud, Cpu } from 'lucide-react'
import Link from 'next/link'

interface EngineeringPart {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  details: string[]
}

const engineeringParts: EngineeringPart[] = [
  {
    id: '1',
    title: 'Backend Architecture',
    description: 'Designing scalable systems that handle millions of requests with precision',
    icon: <Layers size={40} />,
    color: 'text-cyan-400',
    details: ['Microservices Design', 'System Scalability', 'API Design Patterns', 'Performance Optimization'],
  },
  {
    id: '2',
    title: 'Low-Level Systems',
    description: 'Building fast, efficient code at the core level using C++ and C',
    icon: <Cpu size={40} />,
    color: 'text-orange-500',
    details: ['Memory Management', 'Binary Operations', 'Performance Tuning', 'System Optimization'],
  },
  {
    id: '3',
    title: 'Data Systems',
    description: 'Creating robust data pipelines and storage solutions',
    icon: <Database size={40} />,
    color: 'text-purple-500',
    details: ['Database Design', 'Query Optimization', 'Data Pipeline', 'Cache Strategy'],
  },
  {
    id: '4',
    title: 'DevOps & Infrastructure',
    description: 'Automating deployment and ensuring system reliability',
    icon: <Cloud size={40} />,
    color: 'text-cyan-400',
    details: ['Containerization', 'Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code'],
  },
  {
    id: '5',
    title: 'Performance Engineering',
    description: 'Optimizing every millisecond for lightning-fast applications',
    icon: <Zap size={40} />,
    color: 'text-orange-500',
    details: ['Load Testing', 'Profiling', 'Bottleneck Analysis', 'Caching Strategies'],
  },
  {
    id: '6',
    title: 'Code Craftsmanship',
    description: 'Writing clean, maintainable, and elegant code',
    icon: <Code2 size={40} />,
    color: 'text-purple-500',
    details: ['Design Patterns', 'Code Quality', 'Testing', 'Documentation'],
  },
]

export default function Engineering() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-portfolio overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Engineering Means Development
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-cyan-400 rounded-full" />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Development isn't just writing code—it's crafting solutions that solve real problems at scale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineeringParts.map((part, index) => (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card-glass rounded-xl p-8 group hover:border-cyan-400/60 transition-all duration-300"
            >
              <div className={`${part.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {part.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{part.title}</h3>

              <p className="text-gray-400 mb-6 leading-relaxed">{part.description}</p>

              <div className="space-y-2">
                {part.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/experience"
            className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg glow-cyan hover:shadow-2xl transition-all duration-300"
          >
            Explore My Journey
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
