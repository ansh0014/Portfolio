'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 3rem',
        position: 'relative',
        background: `
          radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.06) 0%, transparent 55%),
          #0A0A0F
        `,
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.07) 1px, transparent 0)`,
        backgroundSize: '44px 44px',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', width: '100%' }}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(59,130,246,0.8)', marginBottom: '2rem',
          }}
        >
          Identity
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            width: '64px', height: '1px',
            background: 'linear-gradient(90deg, rgba(59,130,246,0.6), transparent)',
            marginBottom: '2.5rem', transformOrigin: 'left',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 200, fontSize: 'clamp(1.7rem, 4vw, 2.7rem)',
            letterSpacing: '0.03em', lineHeight: 1.4,
            color: '#E5E7EB', marginBottom: '2rem',
          }}
        >
          I build the invisible infrastructure that makes modern applications possible.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '1.05rem', lineHeight: 1.85,
            color: 'rgba(156,163,175,0.9)', marginBottom: '1.5rem',
          }}
        >
          Specializing in scalable backend systems that handle 10,000+ concurrent users,
          I work at the intersection of distributed systems, low-level engineering,
          and real-world product impact. Whether crafting systems in C++ or architecting
          microservices in Go, the goal is always the same — infrastructure that empowers
          others to build.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '1.05rem', lineHeight: 1.85,
            color: 'rgba(156,163,175,0.9)',
          }}
        >
          Engineering, for me, isn&apos;t about writing perfect code — it&apos;s about
          understanding what users truly need and building solutions that make a measurable
          difference: faster, simpler, more reliable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            width: '100%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.15), transparent)',
            marginTop: '4rem',
          }}
        />
      </div>
    </section>
  )
}
