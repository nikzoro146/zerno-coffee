'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Croissant, UtensilsCrossed, CupSoda } from 'lucide-react';
import type { Category } from '@/types/menu';
import { menuItems } from '@/data/menu-items';
import { Button } from '@/components/ui/Button';
import { staggerContainer, fadeUpVariants, scaleImageVariants } from '@/lib/animations';

const categoryIcons: Record<Category, React.ReactNode> = {
  coffee: <Coffee className="w-5 h-5" />,
  alternative: <CupSoda className="w-5 h-5" />,
  desserts: <Croissant className="w-5 h-5" />,
  breakfast: <UtensilsCrossed className="w-5 h-5" />,
};

const categoryLabels: Record<Category, string> = {
  coffee: 'Кофе классика',
  alternative: 'Альтернатива',
  desserts: 'Десерты',
  breakfast: 'Завтраки',
};

const tabVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('coffee');

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="py-20 md:py-32 bg-[#FAF6F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#1C1410] mb-4">
            Наше меню
          </h2>
          <p className="text-[#8A5A3B] text-lg md:text-xl max-w-2xl mx-auto">
            Свежеобжаренный кофе и авторские десерты, приготовленные с любовью каждое утро
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {(Object.keys(categoryLabels) as Category[]).map((category, index) => (
            <motion.button
              key={category}
              custom={index}
              variants={tabVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#1C1410] text-[#FAF6F0] shadow-lg'
                  : 'bg-white text-[#1C1410] hover:bg-[#C67C4E] hover:text-white'
              }`}
            >
              {categoryIcons[category]}
              <span>{categoryLabels[category]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeUpVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-coffee/10 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    variants={scaleImageVariants}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {item.popular && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-3 right-3 bg-[#C67C4E] text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      Популярное
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl font-serif text-[#1C1410]">
                      {item.name}
                    </h3>
                    <span className="text-lg md:text-xl font-semibold text-[#C67C4E]">
                      {item.price} ₽
                    </span>
                  </div>
                  <p className="text-[#8A5A3B] text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Action */}
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <Button
                    variant="outline"
                    className="w-full border-[#C67C4E] text-[#C67C4E] hover:bg-[#C67C4E] hover:text-white transition-all duration-300"
                  >
                    Добавить
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
