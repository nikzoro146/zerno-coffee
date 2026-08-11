'use client'

import { motion } from 'framer-motion'
import { Coffee, Wheat, Dog, Wifi } from 'lucide-react'

const benefits = [
  {
    icon: Coffee,
    title: 'Свежая обжарка',
    description: 'Обжариваем зёрна сами каждые 3 дня. Только так мы гарантируем насыщенный вкус и аромат в каждой чашке.',
  },
  {
    icon: Wheat,
    title: 'Своя выпечка',
    description: 'Каждое утро печём круассаны, чизкейки и тирамису по авторским рецептам. Всё свежее и только с любовью.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi и розетки',
    description: 'Идеальное место для работы: быстрый интернет, удобные розетки у каждого столика и спокойная атмосфера.',
  },
  {
    icon: Dog,
    title: 'Dogs friendly',
    description: 'Приходите с питомцами! Мы любим собак и всегда угостим их вкусняшкой, пока вы наслаждаетесь кофе.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Benefits() {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-caramel font-medium text-sm uppercase tracking-widest mb-4">
            Почему мы
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-coffee mb-6">
            Больше, чем просто кофейня
          </h2>
          <p className="text-coffee/70 text-lg leading-relaxed">
            Мы создали пространство, где каждая деталь имеет значение. 
            От зерна до последней крошки круассана — всё сделано с любовью.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-white border border-coffee/5 hover:border-caramel/20 transition-all duration-500 hover:shadow-xl hover:shadow-coffee/5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-caramel/10 to-caramel-dark/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <benefit.icon className="w-7 h-7 text-caramel" />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-coffee mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-coffee/60 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
