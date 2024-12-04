import React from 'react';
import { Pill, Heart, Brain, Stethoscope } from 'lucide-react';

const products = [
  {
    icon: Heart,
    title: 'Cardiovascular',
    description: 'Advanced treatments for heart health and circulation.'
  },
  {
    icon: Brain,
    title: 'Neuroscience',
    description: 'Innovative solutions for neurological conditions.'
  },
  {
    icon: Pill,
    title: 'Immunology',
    description: 'Strengthening immune systems through breakthrough medicine.'
  },
  {
    icon: Stethoscope,
    title: 'Respiratory',
    description: 'Leading treatments for respiratory conditions.'
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Lines</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Developing innovative treatments across multiple therapeutic areas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <product.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}