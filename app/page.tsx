'use client'

import dynamic from 'next/dynamic'
import FloatingNav from '@/components/FloatingNav'
import AudioToggle from '@/components/AudioToggle'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

// Lazy-load cursor to avoid SSR issues
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })

export default function Home() {
  return (
    <main style={{ background: 'var(--bg-primary)', overflowX: 'hidden' }}>
      {/* Fixed overlays */}
      <CustomCursor />
      <FloatingNav />
      <AudioToggle />

      {/* Scenes */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
