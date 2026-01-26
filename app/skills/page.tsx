import Navigation from '@/components/Navigation'
import Skills from '@/components/sections/Skills'
import OddityBackground from '@/components/animations/OddityBackground'

export default function SkillsPage() {
  return (
    <main className="min-h-screen relative">
      <OddityBackground />
      <Navigation />
      <div className="pt-32 relative z-10">
        <Skills />
      </div>
    </main>
  )
}
