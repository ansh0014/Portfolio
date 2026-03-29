'use client'

import { motion } from 'framer-motion'
import { JSX } from 'react/jsx-runtime'

// ─── Restored Content ─────────────────────────────────────────────
const bio = `I build systems that handle 10,000+ concurrent users without breaking a sweat. Working with the fundamentals — 0s and 1s — I craft low-level systems in C++ and architect microservices in Go that power modern applications at scale.`

const highlightedPhrases: Record<string, 'accent' | 'warm'> = {
  '10,000+ concurrent users': 'warm',
  '0s and 1s': 'accent',
  'low-level systems in C++': 'accent',
  'microservices in Go': 'accent',
}

function renderHighlightedText(text: string): (string | JSX.Element)[] {
  const parts: (string | JSX.Element)[] = []
  let remaining = text
  let key = 0
  while (remaining.length > 0) {
    let earliest = { index: Infinity, phrase: '', color: 'accent' as 'accent' | 'warm' }
    for (const [phrase, color] of Object.entries(highlightedPhrases)) {
      const i = remaining.indexOf(phrase)
      if (i !== -1 && i < earliest.index) earliest = { index: i, phrase, color }
    }
    if (earliest.index === Infinity) { parts.push(remaining); break }
    if (earliest.index > 0) parts.push(remaining.slice(0, earliest.index))
    parts.push(
      <span key={key++} style={{
        color: earliest.color === 'accent' ? '#93C5FD' : '#FCD34D',
        fontWeight: 400,
      }}>{earliest.phrase}</span>
    )
    remaining = remaining.slice(earliest.index + earliest.phrase.length)
  }
  return parts
}

// ─── Stats ────────────────────────────────────────────────────────
const stats = [
  { value: '10K+', label: 'Concurrent Users' },
  { value: '5K+',  label: 'Ops/sec (Redis)' },
  { value: '99%',  label: 'Deployment Success' },
  { value: '35%',  label: 'Faster Load Times' },
]

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      overflow: 'hidden',
    }}>
      {/* ── Stone Background Image ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.0, ease: 'easeOut' }}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          zIndex: 0,
        }}
      />

      {/* ── Fog gradient overlays ──────────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `
          linear-gradient(to bottom,
            rgba(10,10,15,0.55) 0%,
            rgba(10,10,15,0.25) 35%,
            rgba(10,10,15,0.7)  65%,
            rgba(10,10,15,0.97) 100%
          )
        `,
      }} />

      {/* ── Side vignette ─────────────────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,15,0.6) 100%)',
      }} />

      {/* ── Scan line accent ──────────────────────────────────── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.8, duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute', bottom: '48%', left: 0, right: 0,
          height: '1px', transformOrigin: 'left',
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(59,130,246,0.2), transparent)',
          zIndex: 2,
        }}
      />

      {/* ── Main content ──────────────────────────────────────── */}
      <div 
        style={{
          position: 'relative', zIndex: 3,
          padding: 'clamp(3rem, 5vw, 6rem) clamp(1.5rem, 5vw, 6rem) clamp(6rem, 8vw, 10rem)',
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Role label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(147,197,253,0.85)',
            marginBottom: '1rem',
          }}
        >
          Backend Engineer · System Architect · Low-Level Developer
        </motion.p>

        {/* Name — massive, left-aligned */}
        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          {['Anshul', 'Jagota'].map((word, wi) => (
            <div key={wi} style={{ overflow: 'hidden', lineHeight: '0.92' }}>
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 1.1 + wi * 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 300,
                  fontSize: 'clamp(5rem, 13vw, 11rem)',
                  letterSpacing: '-0.01em',
                  color: '#F3F4F6',
                  margin: 0,
                  textShadow: '0 0 80px rgba(59,130,246,0.2)',
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Bottom row: bio + stats */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start lg:items-end"
        >
          {/* Bio */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.7 }}
              style={{
                fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                lineHeight: 1.8, color: 'rgba(209,213,219,0.85)',
                maxWidth: '540px', marginBottom: '2rem',
              }}
            >
              {renderHighlightedText(bio)}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.6 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '0.7rem 1.8rem', cursor: 'none',
                  background: 'rgba(59,130,246,0.15)',
                  border: '1px solid rgba(59,130,246,0.5)', borderRadius: '4px',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 400,
                  fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#BFDBFE',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background='rgba(59,130,246,0.28)'; b.style.boxShadow='0 0 28px rgba(59,130,246,0.3)' }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background='rgba(59,130,246,0.15)'; b.style.boxShadow='none' }}
              >
                View My Work
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '0.7rem 1.8rem', cursor: 'none',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                  fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(209,213,219,0.65)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor='rgba(255,255,255,0.35)'; b.style.color='rgba(209,213,219,1)' }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor='rgba(255,255,255,0.15)'; b.style.color='rgba(209,213,219,0.65)' }}
              >
                Let&apos;s Connect
              </button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9, duration: 0.7 }}
            className="grid grid-cols-2 gap-x-8 gap-y-6 lg:text-right mt-8 lg:mt-0"
          >
            {stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 + i * 0.08 }}
              >
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 300,
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  color: '#E5E7EB', lineHeight: 1,
                  marginBottom: '0.25rem',
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
                  fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'rgba(156,163,175,0.6)',
                }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{
          position: 'absolute', bottom: 0, left: '3rem',
          zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
          paddingBottom: '1.5rem',
        }}
      >
        <motion.div
          animate={{ height: ['32px', '52px', '32px'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', background: 'linear-gradient(to bottom, rgba(59,130,246,0.6), transparent)' }}
        />
        <span style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'rgba(156,163,175,0.35)', writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
        }}>
          scroll
        </span>
      </motion.div>
    </section>
  )
}
