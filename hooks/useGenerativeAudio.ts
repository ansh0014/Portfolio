import { useRef, useState, useEffect } from 'react'

export function useGenerativeAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    // Initialize audio element
    const audio = new Audio('/audio/ambient.mp3')
    audio.loop = true
    audio.volume = 0.5 // Default volume
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const toggle = () => {
    if (!audioRef.current) return

    if (muted) {
      audioRef.current.play().catch(e => console.error('Audio play failed:', e))
      setMuted(false)
    } else {
      audioRef.current.pause()
      setMuted(true)
    }
  }

  return { muted, toggle }
}
