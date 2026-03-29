'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: '1',
    index: '01',
    title: 'Universal Ticket Booking System',
    descriptor: 'Distributed Go microservices SDK — 1,000+ bookings per second across events, flights, transport.',
    tags: ['Go', 'Google Cloud', 'Microservices', 'Jenkins', 'Docker'],
    metric: '1,000+ TPS',
    accent: 'rgba(59,130,246,0.12)',
    accentBorder: 'rgba(59,130,246,0.2)',
  },
  {
    id: '2',
    index: '02',
    title: 'MiniRedis — Multi-Tenant RaaS',
    descriptor: 'Multi-tenant Redis-as-a-Service with containerized isolation and automated CI/CD. 5,000–10,000 ops/sec per node.',
    tags: ['C++', 'Go', 'Docker', 'Kubernetes', 'NGINX'],
    metric: '10K ops/sec',
    accent: 'rgba(59,130,246,0.08)',
    accentBorder: 'rgba(59,130,246,0.15)',
  },
  {
    id: '3',
    index: '03',
    title: 'Pebbel — AI Voice Assistant',
    descriptor: 'AI-driven desktop voice assistant with Groq LLM, real-time OCR parsing, and system automation. 45% efficiency gain.',
    tags: ['Python', 'Groq LLM', 'OCR', 'Voice Recognition'],
    metric: '2× faster response',
    accent: 'rgba(59,130,246,0.06)',
    accentBorder: 'rgba(59,130,246,0.12)',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: '100vh',
        padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 6rem)',
        background: 'radial-gradient(ellipse at 70% 0%, rgba(59,130,246,0.06) 0%, transparent 55%), #0A0A0F',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '5rem' }}
        >
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'rgba(59,130,246,0.8)', marginBottom: '1rem',
          }}>
            Selected Work
          </p>
          <h2 style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 200,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.06em',
            color: '#E5E7EB', lineHeight: 1.05, margin: 0,
          }}>
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Entries */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-16 border-t border-[rgba(59,130,246,0.1)] cursor-none"
            >
              {/* Left: index + title */}
              <div>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                  fontSize: '0.75rem', letterSpacing: '0.2em',
                  color: 'rgba(156,163,175,0.5)', display: 'block', marginBottom: '1.5rem',
                }}>
                  {project.index}
                </span>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 200,
                  fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', letterSpacing: '0.04em',
                  lineHeight: 1.15, color: '#E5E7EB', marginBottom: '1.5rem',
                }}>
                  {project.title}
                </h3>
                {/* Bright metric */}
                <div style={{
                  display: 'inline-block',
                  fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300,
                  fontSize: '1.1rem', color: '#60A5FA', letterSpacing: '0.06em',
                  borderBottom: '1px solid rgba(59,130,246,0.3)', paddingBottom: '2px',
                }}>
                  {project.metric}
                </div>
              </div>

              {/* Right: descriptor + tags */}
              <div
                style={{
                  padding: '2rem', borderRadius: '12px',
                  background: project.accent, border: `1px solid ${project.accentBorder}`,
                  transition: 'filter 0.4s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.filter = 'brightness(1.15)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.filter = 'brightness(0.95)' }}
              >
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                  fontSize: '1rem', lineHeight: 1.8, color: '#9CA3AF', marginBottom: '1.5rem',
                }}>
                  {project.descriptor}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                      fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: '#9CA3AF', border: '1px solid rgba(59,130,246,0.15)',
                      borderRadius: '4px', padding: '0.2rem 0.6rem',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          {/* Final border */}
          <div style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }} />
        </div>
      </div>
    </section>
  )
}
