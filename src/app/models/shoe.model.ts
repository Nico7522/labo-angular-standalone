import { Category } from './category.model';

export interface Shoe {
  productId: number;
  modelName: string;
  description: string;
  brand: string;
  sexe: string;
  image: string;
  price: number;
  discount: number;
  categories: Category[];
  sizes: AvailableSizes[];
}

export interface AvailableSizes {
  sizeId: number;
  size: number;
  stock: number;
}

export interface CreateProductForm {
  modelName: string;
  description: string;
  brand: string;
  sexe: string;
  price: number;
  discount: number;
  categoriesId: number[];
  sizeStock: SizeStock[];
}

export interface SizeStock {
  size?: number;
  sizeId: number;
  stock: number;
}

export interface editProductForm {
  modelName: string;
  description: string;
  brand: string;
  price: number;
  discount: number;
}
