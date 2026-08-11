"use client";

import { Coffee, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1410] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Логотип и описание */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#C67C4E] flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-serif font-bold">ЗЕРНО</span>
            </div>
            <p className="text-[#FAF6F0]/70 leading-relaxed">
              Кофейня с душой в центре города. Свежая обжарка, собственная выпечка и атмосфера, в которую хочется возвращаться.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              {["О нас", "Меню", "Галерея", "Отзывы", "Контакты"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-[#FAF6F0]/70 hover:text-[#C67C4E] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты кратко */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <ul className="space-y-3 text-[#FAF6F0]/70">
              <li>Москва, ул. Пятницкая, 12</li>
              <li>+7 (900) 123-45-67</li>
              <li>Ежедневно 8:00–22:00</li>
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#FAF6F0]/50 text-sm">
              © {currentYear} Кофейня «ЗЕРНО». Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-[#FAF6F0]/50 text-sm">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 text-[#C67C4E] fill-[#C67C4E]" />
              <span>для любителей кофе</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
