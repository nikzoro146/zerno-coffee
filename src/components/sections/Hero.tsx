'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      
      {/* Gradient Orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-caramel/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-80 h-80 md:w-[500px] md:h-[500px] bg-coffee/5 rounded-full blur-3xl"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container relative z-10 mx-auto px-4 md:px-8 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-coffee/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
            <span className="text-sm font-medium text-coffee/70">
              Кофейня в центре Москвы
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-bold text-coffee mb-6 leading-tight"
          >
            Искусство кофе{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-caramel to-caramel-dark bg-clip-text text-transparent">
                в каждой чашке
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-2 left-0 w-full h-3 bg-caramel/20 -z-10 origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-coffee/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Свежая обжарка, авторские десерты и атмосфера, в которой хочется 
            оставаться снова и снова
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <a href="#menu">Смотреть меню</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#booking">Забронировать столик</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-coffee/40"
        >
          <span className="text-xs uppercase tracking-widest">Листайте</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Floating Coffee Bean Decoration */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute top-1/4 right-10 w-16 h-16 md:w-24 md:h-24 opacity-5 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-coffee">
          <path d="M50 5C30 5 15 20 15 45c0 20 12 35 30 40 2 0 3-1 3-3v-8c0-2-1-3-3-3-12 0-20-10-20-25 0-18 10-28 25-28 8 0 15 5 15 15 0 12-8 20-20 25-5 2-8 5-8 10v10c0 5 5 10 12 10 25 0 41-20 41-45S65 5 50 5z"/>
        </svg>
      </motion.div>
    </section>
  )
}
