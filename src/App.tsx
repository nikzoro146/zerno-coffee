import { Navbar } from '@/components/layout'
import { Hero, Benefits, MenuSection, GallerySection } from '@/components/sections'
import { useLenis } from '@/hooks/useLenis'

function App() {
  useLenis()

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Benefits />
      <MenuSection />
      <GallerySection />
    </main>
  )
}

export default App
