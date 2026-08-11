'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Croissant, UtensilsCrossed, CupSoda } from 'lucide-react';
import type { Category } from '@/types/menu';
import { menuItems } from '@/data/menu-items';
import { Button } from '@/components/ui/Button';

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {(Object.keys(categoryLabels) as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#1C1410] text-[#FAF6F0] shadow-lg'
                  : 'bg-white text-[#1C1410] hover:bg-[#C67C4E] hover:text-white'
              }`}
            >
              {categoryIcons[category]}
              <span>{categoryLabels[category]}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {item.popular && (
                    <div className="absolute top-3 right-3 bg-[#C67C4E] text-white px-3 py-1 rounded-full text-xs font-medium">
                      Популярное
                    </div>
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
