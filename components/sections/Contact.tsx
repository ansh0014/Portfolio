'use client'

import { motion } from 'framer-motion'

const contactLinks = [
  {
    label: 'anshuljagota03@gmail.com',
    href: 'mailto:anshuljagota03@gmail.com',
    type: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anshul-jagota-7a4a80323',
    type: 'social',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ansh0014',
    type: 'social',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '8rem 1.5rem', background: '#0A0A0F',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '640px' }}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'rgba(59,130,246,0.8)', marginBottom: '2.5rem',
          }}
        >
          Contact
        </motion.p>

        {/* Evocative heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 200,
            fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', letterSpacing: '0.06em',
            lineHeight: 1.15, color: '#E5E7EB', marginBottom: '3.5rem', margin: '0 0 3.5rem 0',
          }}
        >
          Let&apos;s build something
          <br />
          <em style={{ fontStyle: 'italic', color: '#9CA3AF' }}>that matters.</em>
        </motion.h2>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}
        >
          {contactLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              target={link.type === 'social' ? '_blank' : undefined}
              rel={link.type === 'social' ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: link.type === 'email' ? 'DM Sans, sans-serif' : '"Cormorant Garamond", Georgia, serif',
                fontWeight: link.type === 'email' ? 300 : 200,
                fontSize: link.type === 'email' ? '1.05rem' : '1.3rem',
                letterSpacing: link.type === 'email' ? '0.05em' : '0.1em',
                color: link.type === 'email' ? '#E5E7EB' : '#9CA3AF',
                textDecoration: 'none', borderBottom: '1px solid transparent', paddingBottom: '2px',
                transition: 'color 0.3s, border-color 0.3s, box-shadow 0.3s',
                display: 'inline-block', cursor: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.color = '#60A5FA'
                el.style.borderBottomColor = 'rgba(59,130,246,0.4)'
                if (link.type === 'email') el.style.boxShadow = '0 0 20px rgba(59,130,246,0.2)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.color = link.type === 'email' ? '#E5E7EB' : '#9CA3AF'
                el.style.borderBottomColor = 'transparent'
                el.style.boxShadow = 'none'
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '0.72rem', letterSpacing: '0.12em', color: '#6B7280',
            marginTop: '5rem', margin: '5rem 0 0 0',
          }}
        >
          © 2026 Anshul Jagota
        </motion.p>
      </div>
    </section>
  )
}
