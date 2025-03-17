
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Globe } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implementation pour la recherche à venir
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="medium" />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher une destination..."
                  className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-blue"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium">
              Accueil
            </Link>
            <Link to="/properties" className="text-gray-700 hover:text-brand-blue font-medium">
              Propriétés
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-blue font-medium">
              À propos
            </Link>
            <Button className="bg-brand-blue hover:bg-opacity-90">
              <User className="mr-2 h-4 w-4" /> Connexion
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-brand-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden py-2 pb-3">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une destination..."
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-blue"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-brand-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/properties"
              className="block py-2 text-gray-700 hover:text-brand-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Propriétés
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-brand-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Button className="w-full bg-brand-blue hover:bg-opacity-90">
              <User className="mr-2 h-4 w-4" /> Connexion
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
