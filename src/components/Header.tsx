"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <div className="text-xl font-bold">ELB</div>
            </div>
            <div>
              <h1 className="text-xl font-bold">Accessoires Automobiles</h1>
              <p className="text-blue-400 text-sm">EL BAHJA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
              Accueil
            </Link>
            <Link href="/produits" className="hover:text-blue-400 transition-colors duration-200">
              Produits
            </Link>
            <Link href="/a-propos" className="hover:text-blue-400 transition-colors duration-200">
              À Propos
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
            <Link 
              href="/" 
              className="hover:text-blue-400 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/produits" 
              className="hover:text-blue-400 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Produits
            </Link>
            <Link 
              href="/a-propos" 
              className="hover:text-blue-400 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-blue-400 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}