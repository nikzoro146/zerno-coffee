"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1410] mb-6">
            Ждём вас в гости
          </h2>
          <p className="text-lg text-[#8A5A3B] max-w-2xl mx-auto">
            Найдите нас в самом сердце города. Мы всегда рады новым друзьям.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FAF6F0] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#C67C4E]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1C1410] mb-2">
                  Адрес
                </h3>
                <p className="text-[#8A5A3B] text-lg">
                  Москва, ул. Пятницкая, 12
                </p>
                <p className="text-[#8A5A3B] text-sm mt-1">
                  Метро Третьяковская, 5 минут пешком
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FAF6F0] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#C67C4E]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1C1410] mb-2">
                  Часы работы
                </h3>
                <p className="text-[#8A5A3B] text-lg">
                  Ежедневно: 8:00–22:00
                </p>
                <p className="text-[#8A5A3B] text-sm mt-1">
                  Кухня до 21:30
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FAF6F0] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#C67C4E]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1C1410] mb-2">
                  Связь
                </h3>
                <p className="text-[#8A5A3B] text-lg">
                  +7 (900) 123-45-67
                </p>
                <div className="flex gap-3 mt-3">
                  <Button
                    onClick={() => window.open("https://wa.me/79001234567", "_blank")}
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    onClick={() => window.open("https://t.me/zerno_coffee", "_blank")}
                    className="bg-[#0088cc] hover:bg-[#0066aa] text-white px-6 py-3 rounded-xl"
                  >
                    Telegram
                  </Button>
                </div>
              </div>
            </div>

            {/* Соцсети */}
            <div className="pt-8 border-t border-[#FAF6F0]">
              <h3 className="text-lg font-semibold text-[#1C1410] mb-4">
                Следите за нами
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/zerno_coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#FAF6F0] flex items-center justify-center hover:bg-[#C67C4E] transition-colors duration-300 group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-[#1C1410] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://t.me/zerno_coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#FAF6F0] flex items-center justify-center hover:bg-[#0088cc] transition-colors duration-300 group"
                >
                  <Send className="w-5 h-5 text-[#1C1410] group-hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Карта */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-full rounded-3xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.5!2d37.63!3d55.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ0JzMwLjAiTiAzN8KwMzcnNDguMCJF!5e0!3m2!1sen!2sru!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Карта кофейни ЗЕРНО"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
