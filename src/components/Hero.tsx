import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80"
          alt="Laboratory"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 flex items-center h-full">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advancing Healthcare<br />Through Innovation
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Pioneering breakthrough treatments and improving lives through cutting-edge pharmaceutical research and development.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
              Discover Our Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}