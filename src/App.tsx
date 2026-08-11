import { Navbar, Footer } from '@/components/layout'
import { Hero, Benefits, MenuSection, GallerySection, TestimonialsSection, ContactsSection } from '@/components/sections'
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
      <TestimonialsSection />
      <ContactsSection />
      <Footer />
    </main>
  )
}

export default App
