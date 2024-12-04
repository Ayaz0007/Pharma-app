import React from 'react';
import { Tag, ShoppingCart } from 'lucide-react';

interface MedicineCardProps {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  prescription: boolean;
}

export function MedicineCard({
  name,
  description,
  price,
  originalPrice,
  discount,
  image,
  prescription
}: MedicineCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            {discount}% OFF
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      
      <div className="flex items-center mb-3">
        <span className="text-2xl font-bold text-blue-600">${price.toFixed(2)}</span>
        {originalPrice > price && (
          <span className="ml-2 text-sm text-gray-500 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      
      {prescription && (
        <div className="flex items-center text-amber-600 text-sm mb-3">
          <Tag className="h-4 w-4 mr-1" />
          Prescription Required
        </div>
      )}
      
      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
        <ShoppingCart className="h-5 w-5 mr-2" />
        Add to Cart
      </button>
    </div>
  );
}