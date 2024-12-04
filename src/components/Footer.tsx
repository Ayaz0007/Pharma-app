import React from 'react';
import { Microscope, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Microscope className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-semibold text-white">VitaCare</span>
            </div>
            <p className="text-sm">
              Advancing healthcare through innovation and research, committed to improving lives globally.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#products" className="hover:text-blue-400">Products</a></li>
              <li><a href="#research" className="hover:text-blue-400">Research</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Clinical Trials</a></li>
              <li><a href="#" className="hover:text-blue-400">Publications</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} VitaCare Pharmaceuticals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}