import { useEffect, useRef, useState } from 'react'

function fadeVolume(
  audio: HTMLAudioElement,
  from: number,
  to: number,
  duration: number,
  onComplete?: () => void
) {
  const steps = 30
  const interval = duration / steps
  const delta = (to - from) / steps
  let current = from
  audio.volume = from
  const timer = setInterval(() => {
    current += delta
    audio.volume = Math.min(1, Math.max(0, current))
    if ((delta > 0 && current >= to) || (delta < 0 && current <= to)) {
      clearInterval(timer)
      if (onComplete) onComplete()
    }
  }, interval)
}

export function useAmbientAudio(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    audioRef.current = new Audio(src)
    audioRef.current.loop = true
    audioRef.current.volume = 0
    return () => {
      if (audioRef.current) audioRef.current.pause()
    }
  }, [src])

  const toggle = () => {
    if (!audioRef.current) return
    if (muted) {
      audioRef.current.play().catch(() => {/* user gesture required — handled gracefully */})
      fadeVolume(audioRef.current, 0, 0.12, 2000)
      setMuted(false)
    } else {
      fadeVolume(audioRef.current, 0.12, 0, 1000, () => audioRef.current?.pause())
      setMuted(true)
    }
  }

  return { muted, toggle }
}
