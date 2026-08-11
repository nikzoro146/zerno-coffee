export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Александр Волков",
    role: "Фрилансер",
    content:
      "«ЗЕРНО» — мое любимое место для работы. Идеальный баланс шума и тишины, быстрый Wi-Fi и, конечно же, лучший флэт уайт в районе. Интерьер располагает к творчеству.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Мария Соколова",
    role: "Дизайнер интерьеров",
    content:
      "Влюбилась в это место с первого взгляда. Эстетика минимализма, теплые тона и невероятное внимание к деталям. Круассаны здесь пекут сами — это чувствуется в каждом кусочке.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Дмитрий Орлов",
    role: "Кофейный энтузиаст",
    content:
      "Редко где встретишь такую качественную альтернативу. Баристы настоящие профессионалы, могут рассказать о зернах всё. V60 готовят виртуозно. Рекомендую!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop&crop=face",
  },
];
