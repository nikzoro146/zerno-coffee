"use client";

import { motion } from "framer-motion";
import { Star, Coffee } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Button } from '@/components/ui/Button';

export default function TestimonialsSection() {
  const handleBooking = () => {
    window.location.href = "#contacts";
  };

  return (
    <section id="testimonials" className="py-24 bg-[#FAF6F0] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1410] mb-6">
            Что говорят гости
          </h2>
          <p className="text-lg text-[#8A5A3B] max-w-2xl mx-auto">
            Мы гордимся каждым отзывом. Для нас важно, чтобы каждый гость уходил с улыбкой.
          </p>
        </motion.div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#FAF6F0]"
            >
              {/* Рейтинг */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-[#C67C4E] text-[#C67C4E]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Текст отзыва */}
              <p className="text-[#1C1410] text-base leading-relaxed mb-8 italic">
                {testimonial.content}
              </p>

              {/* Автор */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FAF6F0]"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-[#1C1410]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#8A5A3B]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Баннер бронирования */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-[#1C1410] text-white"
        >
          {/* Фоновое изображение с затемнением */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d7686ff?q=80&w=1600&h=600&auto=format&fit=crop"
              alt="Интерьер кофейни"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1410] via-[#1C1410]/90 to-transparent" />
          </div>

          {/* Контент */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Coffee className="w-5 h-5 text-[#C67C4E]" />
                <span className="text-sm font-medium">Бронирование столиков</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif mb-4">
                Хотите провести вечер в уютной атмосфере?
              </h3>
              <p className="text-[#FAF6F0]/80 text-lg">
                Забронируйте столик заранее, особенно на выходные. Мы создадим для вас идеальную атмосферу.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button
                onClick={handleBooking}
                className="bg-[#C67C4E] hover:bg-[#8A5A3B] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#C67C4E]/25"
              >
                Забронировать столик
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/79001234567", "_blank")}
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
              >
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
