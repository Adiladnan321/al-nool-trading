import React, { useState } from 'react';
import { MenuIcon, XIcon, ShoppingBagIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <ShoppingBagIcon className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">
            Al Nool Trading
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium">
            Products
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
            About Us
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
            Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <nav className="flex flex-col space-y-3 pb-3">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
          </nav>
        </div>}
    </header>;
}