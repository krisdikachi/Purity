"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {cn} from '@/lib/utils'; // Assuming you have a utility function for class names
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={cn("  p-3")}>  {/* Correct: using Tailwind classes and cn() */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
        <Image 
        src={"/logo.jpg"}
        alt='The Logo Of The Best Purity Foundation(Royal Puritan Foundation)'
        height={60}
        width={60}
        className="rounded-full"/>
            <h1 className="text-sm italic font-bold text-[#F8BD57] mono-cursive">Royal Puritan Foundation</h1>
          </div>
          
                    <nav className="hidden md:flex space-x-8 mx-62">
            {['Home', 'Programs', 'Events', 'About', 'Resources',].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="mono-cursive relative text-[#1c0f57] font-medium hover:text-[#F8BD57] transition-colors duration-300
                  after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F8BD57]
                  after:left-0 after:bottom-[-4px] after:rounded-full
                  after:scale-x-0 after:origin-right after:transition-transform after:duration-300
                  hover:after:scale-x-100 hover:after:origin-left"
              >
                {item}
              </a>
            ))}

           
          </nav>
           <button className="mono-cursive hidden md:block text-[#1c0f57] bg-[#F8BD57] font-medium hover:text-[#F8BD57] hover:bg-[#1c0f57] transition-colors duration-300 w-24 text-[15px]  h-8 rounded-md">
              Join Us
            </button>
              
          <button 
            className="md:hidden text-[#F8BD57]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

       {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {['Home', 'Programs', 'Events', 'About', 'Resources', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mono-cursive text-[#1c0f57] mb-4 hover:text-[#F8BD57] transition-all duration-300
                    transform hover:translate-x-2 hover:scale-105
                    border-l-4 border-transparent hover:border-[#F8BD57] pl-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  
                </a>
                
              ))}

            </nav>
            
          </div>
          
        )}
      </div>
    </header>
  );
};

export default Header;
