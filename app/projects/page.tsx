import Navigation from '@/components/Navigation'
import Projects from '@/components/sections/Projects'
import OddityBackground from '@/components/animations/OddityBackground'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative">
      <OddityBackground />
      <Navigation />
      <div className="pt-32 relative z-10">
        <Projects />
      </div>
    </main>
  )
}
