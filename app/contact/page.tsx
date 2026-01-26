import Navigation from '@/components/Navigation'
import Contact from '@/components/sections/Contact'
import OddityBackground from '@/components/animations/OddityBackground'

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      <OddityBackground />
      <Navigation />
      <div className="pt-32 relative z-10">
        <Contact />
      </div>
    </main>
  )
}
