'use client'

import { useRef } from 'react'
import { motion, Variants } from 'framer-motion'

const skillCategories = [
  {
    id: 'lang',
    title: 'Languages',
    icon: '< / >',
    skills: [
      { name: 'Go', note: 'Primary' },
      { name: 'C++', note: 'Low-level' },
      { name: 'Python', note: 'Scripting' },
      { name: 'C', note: 'Systems' },
      { name: 'SQL', note: 'Queries' },
      { name: 'JavaScript', note: 'Frontend' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Architecture',
    icon: '{ }',
    skills: [
      { name: 'Microservices', note: 'Design Pattern' },
      { name: 'REST APIs', note: 'HTTP/JSON' },
      { name: 'System Design', note: 'Distributed' },
      { name: 'Low-Level Prog.', note: 'Memory/Perf' },
      { name: 'JWT Auth', note: 'Security' },
      { name: 'Apache Kafka', note: 'Event Stream' },
      { name: 'Event-Driven', note: 'Architecture' },
      { name: 'Node.js', note: 'Runtime' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Storage',
    icon: '[ ]',
    skills: [
      { name: 'PostgreSQL', note: 'Relational' },
      { name: 'MongoDB', note: 'Document DB' },
      { name: 'Redis', note: 'In-Memory Cache' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: '⟳',
    skills: [
      { name: 'Docker', note: 'Containers' },
      { name: 'Kubernetes', note: 'Orchestration' },
      { name: 'CI/CD Pipelines', note: 'Automation' },
      { name: 'Google Cloud', note: 'GCP' },
      { name: 'NGINX', note: 'Web Server' },
      { name: 'Jenkins', note: 'Build Server' },
    ],
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        padding: '10rem 3rem',
        background: `
          radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.12) 0%, transparent 65%),
          radial-gradient(ellipse at 10% 80%, rgba(59,130,246,0.08) 0%, transparent 55%),
          #0A0A0F
        `,
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '6rem', textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '0.85rem', letterSpacing: '0.35em', textTransform: 'uppercase',
            color: '#60A5FA', marginBottom: '1.5rem',
          }}>
            Capabilities
          </p>
          <h2 style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 200,
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', letterSpacing: '0.04em',
            color: '#F3F4F6', lineHeight: 1.05, margin: 0,
          }}>
            Technical Arsenal
          </h2>
          <div style={{
            width: '80px', height: '1px',
            background: 'linear-gradient(90deg, transparent, #3B82F6, transparent)',
            margin: '2.5rem auto 0'
          }} />
        </motion.div>

        {/* Skill Columns (Cards instead of bare borders) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
        }}>
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: catIdx * 0.15 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(17, 19, 26, 0.4)',
                border: '1px solid rgba(59,130,246,0.15)',
                borderTop: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '16px',
                padding: '3rem 2.5rem',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              }}
            >
              {/* Category header */}
              <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <span style={{
                  fontFamily: 'DM Sans, monospace', fontSize: '1.2rem',
                  color: 'rgba(96,165,250,0.6)', marginBottom: '1rem',
                  display: 'block', letterSpacing: '0.05em',
                }}>
                  {cat.icon}
                </span>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 300, fontSize: '1.8rem', letterSpacing: '0.04em',
                  color: '#E5E7EB', margin: 0,
                }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills list */}
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              >
                {cat.skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    variants={item}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '1rem',
                      background: 'rgba(59,130,246,0.03)',
                      border: '1px solid rgba(255,255,255,0.03)',
                      borderRadius: '8px',
                      cursor: 'none',
                      transition: 'background 0.3s, border-color 0.3s, transform 0.3s',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLLIElement
                      el.style.background = 'rgba(59,130,246,0.12)'
                      el.style.borderColor = 'rgba(59,130,246,0.3)'
                      el.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLLIElement
                      el.style.background = 'rgba(59,130,246,0.03)'
                      el.style.borderColor = 'rgba(255,255,255,0.03)'
                      el.style.transform = 'translateY(0)'
                    }}
                  >
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif', fontWeight: 400,
                      fontSize: '1.2rem', color: '#F3F4F6',
                      letterSpacing: '0.02em',
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif', fontWeight: 400,
                      fontSize: '0.75rem', letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#60A5FA',
                      paddingLeft: '1rem', textAlign: 'right', flexShrink: 0,
                    }}>
                      {skill.note}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
