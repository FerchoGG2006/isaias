export type CategoryId = 'todos' | 'sueteres' | 'gorras' | 'mugs';

export interface Product {
  id: string;
  title: string;
  category: CategoryId;
  price: number;
  description: string;
  tag: string;
  image: string;
  optionsLabel: string;
  options: string[];
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  optionSelected: string;
  qty: number;
}

export interface Technique {
  id: string;
  title: string;
  description: string;
  iconSvg: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}
