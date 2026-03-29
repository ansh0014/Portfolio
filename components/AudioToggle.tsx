'use client'

import { useGenerativeAudio } from '@/hooks/useGenerativeAudio'

export default function AudioToggle() {
  const { muted, toggle } = useGenerativeAudio()

  return (
    <button
      onClick={toggle}
      aria-label={muted ? 'Enable ambient audio' : 'Mute ambient audio'}
      className={`audio-toggle ${!muted ? 'active' : ''}`}
      title={muted ? 'Enable ambient sound' : 'Mute'}
    >
      {muted ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          style={{ color: 'rgba(156,163,175,0.5)' }}>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          style={{ color: 'var(--accent)' }}>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  )
}
