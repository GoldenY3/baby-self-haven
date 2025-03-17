
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      {/* Image de fond avec un dégradé */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=1170&auto=format&fit=crop"
            alt="Villa avec vue panoramique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/25"></div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fadeIn font-poppins">
          Trouvez votre chez-vous, partout
        </h1>
        <p className="text-xl md:text-2xl mb-8 md:mb-10 max-w-2xl animate-slideUp">
          Découvrez des logements uniques pour des séjours inoubliables
        </p>

        {/* Formulaire de recherche */}
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden animate-slideUp">
          <form className="md:flex">
            <div className="relative flex-1 p-3 md:p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <label htmlFor="location" className="block text-xs font-medium text-gray-700 mb-1">Destination</label>
              <div className="flex items-center">
                <MapPin size={20} className="text-brand-pink mr-2" />
                <input
                  id="location"
                  type="text"
                  placeholder="Où allez-vous ?"
                  className="w-full outline-none text-gray-900"
                />
              </div>
            </div>

            <div className="flex-1 flex">
              <div className="p-3 md:p-4 flex-1 border-b md:border-b-0 md:border-r border-gray-200">
                <label htmlFor="check-in" className="block text-xs font-medium text-gray-700 mb-1">Arrivée</label>
                <input
                  id="check-in"
                  type="date"
                  className="w-full outline-none text-gray-900"
                />
              </div>
              <div className="p-3 md:p-4 flex-1 border-b md:border-b-0 md:border-r border-gray-200">
                <label htmlFor="check-out" className="block text-xs font-medium text-gray-700 mb-1">Départ</label>
                <input
                  id="check-out"
                  type="date"
                  className="w-full outline-none text-gray-900"
                />
              </div>
            </div>

            <div className="p-3 md:p-4 flex justify-between items-center">
              <div className="flex-1 md:mr-4">
                <label htmlFor="guests" className="block text-xs font-medium text-gray-700 mb-1">Voyageurs</label>
                <select
                  id="guests"
                  className="w-full outline-none text-gray-900 bg-transparent"
                >
                  <option value="1">1 voyageur</option>
                  <option value="2">2 voyageurs</option>
                  <option value="3">3 voyageurs</option>
                  <option value="4">4 voyageurs</option>
                  <option value="5">5+ voyageurs</option>
                </select>
              </div>
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                <Search size={18} className="mr-2" /> Rechercher
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
