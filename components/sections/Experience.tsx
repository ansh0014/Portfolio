'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    id: '1',
    period: 'May 2025 — Aug 2025',
    company: 'Zidio Development',
    role: 'Backend Engineer',
    type: 'Remote',
    summary: 'Spearheaded backend optimization and API reliability improvements for multiple product verticals.',
    metrics: [
      { number: '35%', label: 'Faster load times' },
      { number: '40%', label: 'API reliability gain' },
      { number: '99%', label: 'Deployment success' },
      { number: '1K+', label: 'Posts managed' },
    ],
    achievements: [
      'Built a data visualization platform converting Excel datasets into interactive dashboards with optimized REST API design.',
      'Integrated JWT authentication and role-based access control across multiple services.',
      'Automated testing pipelines via Postman and Git for zero post-release defects.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Cloudinary', 'JWT', 'Docker'],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-24 md:px-12 md:py-32 lg:px-24"
      style={{
        minHeight: '80vh',
        background: 'radial-gradient(ellipse at 60% 30%, rgba(59,130,246,0.05) 0%, transparent 55%), #0A0A0F',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        {/* Header */}
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
            Experience
          </p>
          <h2 style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 200,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.06em',
            color: '#E5E7EB', lineHeight: 1.05, margin: 0,
          }}>
            Professional Journey
          </h2>
        </motion.div>

        {/* Experience Entries */}
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              borderTop: '1px solid rgba(59,130,246,0.1)', paddingTop: '4rem',
            }}
          >
            {/* Period + role header */}
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '2rem',
              alignItems: 'flex-start', marginBottom: '2.5rem',
            }}>
              <div>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                  fontSize: '0.75rem', letterSpacing: '0.2em',
                  color: 'rgba(59,130,246,0.8)', marginBottom: '0.75rem',
                }}>
                  {exp.period}
                </p>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 200,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.04em',
                  color: '#E5E7EB', lineHeight: 1.1, margin: '0 0 0.5rem 0',
                }}>
                  {exp.company}
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                  fontSize: '1rem', color: '#9CA3AF', letterSpacing: '0.06em',
                  margin: 0,
                }}>
                  {exp.role} · {exp.type}
                </p>
              </div>
            </div>

            {/* Metrics — large typographic numbers */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '2rem', marginBottom: '3rem', paddingBottom: '3rem',
              borderBottom: '1px solid rgba(59,130,246,0.08)',
            }}>
              {exp.metrics.map((m, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 200,
                    fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.02em',
                    color: '#E5E7EB', lineHeight: 1, marginBottom: '0.4rem',
                  }}>
                    {m.number}
                  </div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                    fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: '#9CA3AF', opacity: 0.6,
                  }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
              fontSize: '1.05rem', lineHeight: 1.85, color: '#9CA3AF',
              maxWidth: '640px', marginBottom: '2rem',
            }}>
              {exp.summary}
            </p>

            {/* Achievements */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {exp.achievements.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'rgba(59,130,246,0.8)', fontSize: '0.7rem', marginTop: '0.45rem', flexShrink: 0, opacity: 0.7 }}>◆</span>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                    fontSize: '0.95rem', lineHeight: 1.75, color: '#9CA3AF', margin: 0,
                  }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {exp.tech.map(t => (
                <span key={t} style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                  fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#9CA3AF', border: '1px solid rgba(59,130,246,0.15)',
                  borderRadius: '4px', padding: '0.2rem 0.6rem',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
