"use client";
import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import {cn} from '@/lib/utils'; // Assuming you have a utility function for class names

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={cn("bg-white shadow-md p-4")}>  {/* Correct: using Tailwind classes and cn() */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Purity Foundation</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Programs</a>
            <a href="#events" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Events</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Resources</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Home</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Programs</a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Events</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors py-2">About</a>
              <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Resources</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
