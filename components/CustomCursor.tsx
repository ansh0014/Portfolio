'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Activate cursor at 2.2s per skill spec
    const timer = setTimeout(() => setVisible(true), 2200)

    const move = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const handleEnter = () => {
      if (ring.current) ring.current.classList.add('expanded')
    }
    const handleLeave = () => {
      if (ring.current) ring.current.classList.remove('expanded')
    }

    window.addEventListener('mousemove', move)

    // Scale ring for interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', move)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div ref={dot} className="cursor-dot" style={{ opacity: visible ? 1 : 0 }} />
      <div ref={ring} className="cursor-ring" style={{ opacity: visible ? 1 : 0 }} />
    </>
  )
}
