import { Navbar } from '@/components/layout'
import { Hero } from '@/components/sections'
import { useLenis } from '@/hooks/useLenis'

function App() {
  useLenis()

  return (
    <main className="relative">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
