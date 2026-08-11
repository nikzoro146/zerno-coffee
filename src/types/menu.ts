export type Category = 'coffee' | 'alternative' | 'desserts' | 'breakfast';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  popular?: boolean;
}

export const menuCategories = [
  { id: 'coffee', label: 'Кофе классика' },
  { id: 'alternative', label: 'Альтернатива' },
  { id: 'desserts', label: 'Десерты' },
  { id: 'breakfast', label: 'Завтраки' },
] as const;
