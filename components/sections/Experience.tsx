'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Briefcase, Calendar, CheckCircle2, HelpCircle } from 'lucide-react'

interface ExperienceData {
  id: string
  position: string
  company: string
  type: string
  date: string
  summary: string
  achievements: string[]
  metrics: { number: string; label: string }[]
  technologies: string[]
}

const experiences: ExperienceData[] = [
  {
    id: '1',
    position: 'Backend Engineer',
    company: 'Zidio Development',
    type: 'Remote',
    date: 'May 2025 – August 2025',
    summary: 'Spearheaded backend optimization and API reliability improvements.',
    achievements: [
      'Built a data visualization platform converting Excel datasets into interactive charts and dashboards using MERN stack, achieving 35% faster load times through optimized data processing and efficient REST API design.',
      'Developed a full-featured blogging platform with Cloudinary image management and MongoDB for content storage, improving scalability and performance for 1,000+ posts.',
      'Integrated secure JWT-based authentication and role-based access, boosting API reliability by 40% during concurrent usage.',
      'Collaborated with frontend teams to enhance API consistency, reducing integration issues by 30%.',
      'Automated testing and debugging pipelines via Postman and Git, ensuring 99% deployment reliability and zero post-release defects.',
    ],
    metrics: [
      { number: '35%', label: 'Faster Load Times' },
      { number: '1K+', label: 'Posts Managed' },
      { number: '40%', label: 'API Reliability Boost' },
      { number: '99%', label: 'Deployment Success' },
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Cloudinary', 'JWT', 'Postman', 'Git', 'Docker'],
  },
  {
    id: '2',
    position: 'Upcoming Intern',
    company: 'Generic',
    type: 'Upcoming',
    date: 'Future',
    summary: 'Curious to explore new opportunities.',
    achievements: [],
    metrics: [],
    technologies: [],
  },
]

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">Professional Journey</h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-cyan-400 rounded-full" />
          </div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform -translate-x-1/2 shadow-lg shadow-cyan-400/50" />

          <div className="space-y-16 md:space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'md:mr-[calc(50%+60px)]' : 'md:ml-[calc(50%+60px)]'}`}
              >
                <div className="hidden md:block absolute top-12 w-8 h-8 rounded-full bg-orange-500 border-4 border-cyan-400 shadow-lg shadow-cyan-400/60 transform -translate-x-1/2" style={{ left: '50%' }} />

                <motion.div
                  onClick={() => toggleExpand(exp.id)}
                  className="card-glass rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  <div className="mb-6">
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 mb-4"
                    >
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-semibold text-cyan-400">{exp.date}</span>
                    </motion.div>

                    <div className="flex items-center gap-3 flex-wrap mb-3">
                      {exp.company === 'Generic' ? (
                        <HelpCircle className="w-6 h-6 text-cyan-400" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-cyan-400" />
                      )}

                      <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">{exp.company === 'Generic' ? '?' : exp.company}</h3>
                    </div>

                    <p className="text-gray-300 text-lg font-medium mb-3">{exp.position}</p>

                    <span className="inline-block px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-500 text-sm font-medium">{exp.type}</span>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-8 right-8"
                  >
                    <ChevronDown className="w-6 h-6 text-cyan-400" />
                  </motion.div>

                  <motion.div
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: expandedId === exp.id ? 'auto' : 0, opacity: expandedId === exp.id ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-cyan-400/20 space-y-6">
                      <p className="text-gray-300 text-lg leading-relaxed">{exp.summary}</p>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Key Achievements</h4>
                        <div className="space-y-4">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={expandedId === exp.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex gap-3 items-start"
                            >
                              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <p className="text-gray-300 leading-relaxed">
                                {achievement.split(/(\d+%|[\d,]+\+?)/).map((part, i) =>
                                  /\d+%|[\d,]+\+?/.test(part) ? (
                                    <span key={i} className="text-orange-500 font-semibold">
                                      {part}
                                    </span>
                                  ) : (
                                    part
                                  )
                                )}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Metrics</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {exp.metrics.map((metric, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={expandedId === exp.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                              transition={{ delay: idx * 0.05 }}
                              className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/25 text-center hover:border-orange-500/50 transition-all"
                            >
                              <div className="text-3xl font-bold text-orange-500 leading-none mb-2">{metric.number}</div>
                              <div className="text-xs text-gray-500 uppercase tracking-wider">{metric.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0 }}
                              animate={expandedId === exp.id ? { opacity: 1 } : { opacity: 0 }}
                              transition={{ delay: idx * 0.03 }}
                              className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium hover:bg-cyan-400/20 transition-all cursor-pointer"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
