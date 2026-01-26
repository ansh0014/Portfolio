import Navigation from '@/components/Navigation'
import Experience from '@/components/sections/Experience'
import OddityBackground from '@/components/animations/OddityBackground'

export default function ExperiencePage() {
  return (
    <main className="min-h-screen relative">
      <OddityBackground />
      <Navigation />
      <div className="pt-32 relative z-10">
        <Experience />
      </div>
    </main>
  )
}
