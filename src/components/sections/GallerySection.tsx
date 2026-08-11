"use client";

import { motion } from "framer-motion";

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
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    alt: "Чашка свежего кофе",
    span: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    alt: "Бариста готовит кофе",
    span: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    alt: "Детали интерьера",
    span: "row-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517701604599-bb29b5c7fa53?q=80&w=800&auto=format&fit=crop",
    alt: "Зерна кофе",
    span: "",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    alt: "Уютный уголок",
    span: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function GallerySection() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF6F0] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative group overflow-hidden rounded-xl ${item.span} cursor-pointer`}
            >
              {/* Изображение */}
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/800x800/FAF6F0/1C1410?text=Photo";
                }}
              />
              
              {/* Оверлей при наведении */}
              <div className="absolute inset-0 bg-[#1C1410]/0 group-hover:bg-[#1C1410]/40 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                    <span className="font-medium text-[#1C1410] text-sm tracking-wide">
                      {item.alt}
                    </span>
                  </div>
                </div>
              </div>

              {/* Декоративная рамка */}
              <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none group-hover:border-white/40 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Кнопка "Больше фото" (опционально) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="group relative inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-[#1C1410] text-[#1C1410] rounded-full hover:bg-[#1C1410] hover:text-[#FAF6F0] transition-all duration-300 font-medium">
            <span>Смотреть в Instagram</span>
            <svg 
              className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
