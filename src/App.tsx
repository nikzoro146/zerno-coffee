import { Navbar } from '@/components/layout'
import { Hero, Benefits } from '@/components/sections'
import { useLenis } from '@/hooks/useLenis'

function App() {
  useLenis()

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Benefits />
    </main>
  )
}

export default App
