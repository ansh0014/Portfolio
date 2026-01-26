'use client'

import React from "react"

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import {
  Code2,
  Database,
  MessageSquare,
  Zap,
  Cloud,
  Lock,
  Network,
  Gauge,
} from 'lucide-react'

interface Skill {
  id: string
  name: string
  category: string
  icon: React.ReactNode
  color: string
}

const allSkills: Skill[] = [
  { id: '1', name: 'Go', category: 'languages', icon: <Code2 size={40} />, color: 'text-cyan-400' },
  {
    id: '2',
    name: 'C++',
    category: 'languages',
    icon: <Code2 size={40} />,
    color: 'text-cyan-400',
  },
  {
    id: '3',
    name: 'Python',
    category: 'languages',
    icon: <Code2 size={40} />,
    color: 'text-cyan-400',
  },
  { id: '4', name: 'C', category: 'languages', icon: <Code2 size={40} />, color: 'text-cyan-400' },
  { id: '5', name: 'SQL', category: 'languages', icon: <Code2 size={40} />, color: 'text-cyan-400' },
  {
    id: '6',
    name: 'Microservices',
    category: 'backend',
    icon: <Network size={40} />,
    color: 'text-orange-500',
  },
  {
    id: '7',
    name: 'REST APIs',
    category: 'backend',
    icon: <MessageSquare size={40} />,
    color: 'text-orange-500',
  },
  {
    id: '8',
    name: 'System Design',
    category: 'backend',
    icon: <Network size={40} />,
    color: 'text-orange-500',
  },
  {
    id: '9',
    name: 'Node.js',
    category: 'backend',
    icon: <Code2 size={40} />,
    color: 'text-orange-500',
  },
  {
    id: '10',
    name: 'Low-Level Programming',
    category: 'backend',
    icon: <Zap size={40} />,
    color: 'text-orange-500',
  },
  {
    id: '11',
    name: 'JWT Authentication',
    category: 'backend',
    icon: <Lock size={40} />,
    color: 'text-orange-500',
  },
  {
    id: '12',
    name: 'MongoDB',
    category: 'databases',
    icon: <Database size={40} />,
    color: 'text-cyan-400',
  },
  {
    id: '13',
    name: 'PostgreSQL',
    category: 'databases',
    icon: <Database size={40} />,
    color: 'text-cyan-400',
  },
  {
    id: '14',
    name: 'Redis',
    category: 'databases',
    icon: <Zap size={40} />,
    color: 'text-cyan-400',
  },
  {
    id: '15',
    name: 'Apache Kafka',
    category: 'distributed',
    icon: <Network size={40} />,
    color: 'text-orange-500',
  },
  {
    id: '16',
    name: 'Event-Driven Architecture',
    category: 'distributed',
    icon: <Zap size={40} />,
    color: 'text-orange-500',
  },
  {
    id: '17',
    name: 'Docker',
    category: 'devops',
    icon: <Cloud size={40} />,
    color: 'text-cyan-400',
  },
  {
    id: '18',
    name: 'Kubernetes',
    category: 'devops',
    icon: <Network size={40} />,
    color: 'text-cyan-400',
  },
  {
    id: '19',
    name: 'CI/CD Pipelines',
    category: 'devops',
    icon: <Zap size={40} />,
    color: 'text-cyan-400',
  },
  {
    id: '20',
    name: 'NGINX',
    category: 'networking',
    icon: <Gauge size={40} />,
    color: 'text-orange-500',
  },
  {
    id: '21',
    name: 'Load Balancing',
    category: 'networking',
    icon: <Network size={40} />,
    color: 'text-orange-500',
  },
]

const categories = ['all', 'languages', 'backend', 'databases', 'distributed', 'devops', 'networking']

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [displayedSkills, setDisplayedSkills] = useState<Skill[]>(allSkills)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const filtered =
      selectedCategory === 'all' ? allSkills : allSkills.filter(skill => skill.category === selectedCategory)
    setDisplayedSkills(filtered)
  }, [selectedCategory])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const currentRef = sectionRef.current
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto glow-cyan" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border capitalize ${selectedCategory === category
                ? 'bg-cyan-400 text-black border-cyan-400 glow-cyan'
                : 'border-cyan-400/30 text-gray-400 hover:border-cyan-400'
                }`}
              whileHover={{ scale: 1.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="card-glass rounded-xl p-8 text-center h-full flex flex-col items-center justify-between group hover:border-cyan-400/60 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`${skill.color} mb-4 group-hover:rotate-360 transition-transform duration-600`}>
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
