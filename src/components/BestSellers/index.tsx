import React from 'react';
import { MedicineCard } from './MedicineCard';

const bestSellers = [
  {
    name: "VitaFlex Pain Relief",
    description: "Advanced formula for joint and muscle pain relief. Fast-acting and long-lasting.",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80",
    prescription: false
  },
  {
    name: "CardioGuard Plus",
    description: "Premium heart health supplement with CoQ10 and Omega-3.",
    price: 45.99,
    originalPrice: 45.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80",
    prescription: true
  },
  {
    name: "ImmunoBoost Ultra",
    description: "Enhanced immune system support with Vitamin C, D3, and Zinc.",
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80",
    prescription: false
  },
  {
    name: "DiabeCare Control",
    description: "Advanced diabetes management medication with blood sugar control.",
    price: 89.99,
    originalPrice: 99.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80",
    prescription: true
  }
];

export function BestSellers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Selling Medicines</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular and trusted medications, carefully formulated for your health needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((medicine, index) => (
            <MedicineCard key={index} {...medicine} />
          ))}
        </div>
      </div>
    </section>
  );
}