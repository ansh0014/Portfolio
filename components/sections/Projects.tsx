'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  features: string[]
  link?: string
  github?: string
  highlights: string[]
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Universal Ticket Booking System',
    description: 'Distributed Go-based microservices SDK enabling bookings across events, flights, and transport services with automated CI/CD and real-time scaling.',
    technologies: ['Go', 'Google Cloud Platform', 'Microservices', 'Jenkins', 'Docker'],
    features: ['Distributed transactions', 'Real-time scaling', 'Automated CI/CD', 'Multi-service orchestration'],
    highlights: ['1,000+ bookings per second', '25% reduction in deployment failures', 'Daily release frequency'],
    link: '#',
    github: '#',
  },
  {
    id: '2',
    title: 'MiniRedis — Multi-Tenant Redis-as-a-Service',
    description: 'Multi-tenant RaaS platform with isolated instances, containerized microservices architecture, and automated CI/CD pipeline.',
    technologies: ['C++', 'Go', 'Python', 'Docker', 'Kubernetes', 'NGINX'],
    features: ['Multi-tenant isolation', 'Auto-scaling instances', 'Container orchestration', 'Load balancing'],
    highlights: ['5,000-10,000 ops/sec per node', '100+ isolated instances', '60% faster deployment', '85% reduction in config drift'],
    link: '#',
    github: '#',
  },
  {
    id: '3',
    title: 'Pebbel – AI Voice Assistant for PC',
    description: 'AI-driven desktop voice assistant powered by Groq LLM with context-aware responses, OCR-based visual parsing, and system automation.',
    technologies: ['Python', 'Groq LLM', 'OCR', 'Voice Recognition'],
    features: ['Context-aware responses', 'Real-time OCR parsing', 'System automation', 'Multi-modal understanding'],
    highlights: ['45% increase in task efficiency', '2x faster response latency', 'Real-time context awareness'],
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">Featured Work</h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-cyan-400 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative card-glass rounded-2xl p-8 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Links hidden as per user request */}
                  </div>
                </div>

                <p className="text-gray-300 text-base leading-relaxed mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="text-sm text-gray-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-500 text-xs font-semibold"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.03 }}
                        className="px-3 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-medium hover:bg-cyan-400/20 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div className="mt-8 flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
