import React, { useState } from 'react';
import { FlaskConical, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <FlaskConical className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-800">Nutramatic Pharmacy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600">Products</a>
            <a href="#research" className="text-gray-600 hover:text-blue-600">Research</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#products"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Products
          </a>
          <a
            href="#research"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Research
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}