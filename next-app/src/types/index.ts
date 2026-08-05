export type CategoryId = 'todos' | 'ajustadas' | 'cuello_tejido' | 'qatar' | 'reflectivos_ninos' | 'mementos';

export interface FabricOption {
  value: string;
  label: string;
}

export interface Product {
  id: string;
  title: string;
  category: CategoryId;
  price: number;
  description: string;
  tag: string;
  image: string;
  fabricLabel: string;
  fabrics: FabricOption[];
  sizes?: string[];
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  fabric: string;
  size: string;
  qty: number;
}

export interface Technique {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  initials: string;
  role: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CategoryTab {
  id: CategoryId;
  label: string;
}
