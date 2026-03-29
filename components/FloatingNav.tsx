'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function FloatingNav() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div style={{
      position: 'fixed',
      top: '1.5rem',
      right: '1.5rem',
      zIndex: 8000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.5rem',
    }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              background: 'rgba(10, 10, 15, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(59,130,246,0.15)',
              borderRadius: '12px',
              padding: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              minWidth: '130px',
            }}
          >
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-body), DM Sans, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  letterSpacing: '0.06em',
                  textAlign: 'right',
                  padding: '0.35rem 0.5rem',
                  borderRadius: '6px',
                  transition: 'color 0.3s',
                  cursor: 'none',
                }}
                onMouseEnter={e => { (e.target as HTMLButtonElement).style.color = 'var(--accent)' }}
                onMouseLeave={e => { (e.target as HTMLButtonElement).style.color = 'var(--text-secondary)' }}
              >
                {s.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle navigation"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(59,130,246,0.25)',
          background: 'rgba(10,10,15,0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          cursor: 'none',
          transition: 'border-color 0.3s',
          padding: 0,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(59,130,246,0.5)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(59,130,246,0.25)' }}
      >
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            animate={{
              rotate: open && i === 0 ? 45 : open && i === 2 ? -45 : 0,
              y: open && i === 0 ? 8 : open && i === 2 ? -8 : 0,
              opacity: open && i === 1 ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'block',
              width: '14px',
              height: '1px',
              background: 'var(--text-secondary)',
              transformOrigin: 'center',
            }}
          />
        ))}
      </button>
    </div>
  )
}
