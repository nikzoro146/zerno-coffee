"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariants, scaleImageVariants } from "@/lib/animations";

// Данные для галереи
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    alt: "Интерьер кофейни ЗЕРНО",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    alt: "Чашка свежего кофе",
    span: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1511537632536-b7a4896840a4?q=80&w=800&auto=format&fit=crop",
    alt: "Бариста готовит кофе",
    span: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    alt: "Детали интерьера",
    span: "row-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop",
    alt: "Зерна кофе",
    span: "",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d7686ff?q=80&w=800&auto=format&fit=crop",
    alt: "Уютный уголок",
    span: "",
  },
];

export function GallerySection() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF6F0] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок секции */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1410] mb-6">
            Атмосфера <span className="text-[#C67C4E]">ЗЕРНА</span>
          </h2>
          <p className="text-[#8A5A3B]/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Пространство, где каждая деталь создана для вашего комфорта.
            От аромата свежей обжарки до мягкого света в вечерние часы.
          </p>
        </motion.div>

        {/* Сетка галереи */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUpVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className={`relative group overflow-hidden rounded-xl ${item.span} cursor-pointer`}
            >
              {/* Изображение */}
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              <motion.img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                variants={scaleImageVariants}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/800x800/FAF6F0/1C1410?text=Photo";
                }}
              />
              
              {/* Оверлей при наведении */}
              <div className="absolute inset-0 bg-[#1C1410]/0 group-hover:bg-[#1C1410]/40 transition-colors duration-500 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
                >
                  <span className="font-medium text-[#1C1410] text-sm tracking-wide">
                    {item.alt}
                  </span>
                </motion.div>
              </div>

              {/* Декоративная рамка */}
              <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none group-hover:border-white/40 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Кнопка "Больше фото" (опционально) */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-[#1C1410] text-[#1C1410] rounded-full hover:bg-[#1C1410] hover:text-[#FAF6F0] transition-all duration-300 font-medium"
          >
            <span>Смотреть в Instagram</span>
            <svg 
              className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
