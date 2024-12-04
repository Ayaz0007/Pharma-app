export interface Medicine {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  prescription: boolean;
  category: string;
}