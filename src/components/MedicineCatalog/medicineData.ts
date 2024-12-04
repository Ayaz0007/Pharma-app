import { Medicine } from './types';

export const categories = [
  'Pain Relief',
  'Cardiovascular',
  'Diabetes',
  'Respiratory',
  'Vitamins',
  'Antibiotics'
];

export const medicines: Medicine[] = [
  {
    name: "NutraPain Relief Plus",
    description: "Advanced formula for chronic pain management with extended release technology.",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80",
    prescription: false,
    category: "Pain Relief"
  },
  {
    name: "CardioShield Pro",
    description: "Complete heart health formula with CoQ10 and Omega-3 fatty acids.",
    price: 45.99,
    originalPrice: 45.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80",
    prescription: true,
    category: "Cardiovascular"
  },
  {
    name: "GlucoBalance Elite",
    description: "Advanced diabetes management with improved glucose control.",
    price: 89.99,
    originalPrice: 99.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80",
    prescription: true,
    category: "Diabetes"
  },
  {
    name: "RespiClear Advanced",
    description: "Fast-acting respiratory relief for asthma and bronchial conditions.",
    price: 34.99,
    originalPrice: 44.99,
    discount: 22,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80",
    prescription: true,
    category: "Respiratory"
  },
  {
    name: "MultiVital Complete",
    description: "Comprehensive multivitamin formula with minerals and antioxidants.",
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80",
    prescription: false,
    category: "Vitamins"
  },
  {
    name: "ImmunoDefense Plus",
    description: "Powerful immune system support with Zinc, Vitamin C, and D3.",
    price: 25.99,
    originalPrice: 29.99,
    discount: 13,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80",
    prescription: false,
    category: "Vitamins"
  },
  {
    name: "BioFlex Antibiotics",
    description: "Broad-spectrum antibiotic for bacterial infections.",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80",
    prescription: true,
    category: "Antibiotics"
  },
  {
    name: "HeartGuard Supreme",
    description: "Premium cardiovascular support with blood pressure management.",
    price: 55.99,
    originalPrice: 65.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80",
    prescription: true,
    category: "Cardiovascular"
  }
];