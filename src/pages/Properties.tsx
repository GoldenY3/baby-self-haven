
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { SlidersHorizontal, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Properties: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 font-poppins">Découvrez nos propriétés</h1>
              <p className="text-gray-600">Plus de {properties.length} logements disponibles</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Carte</span>
              </Button>
              <Button variant="outline" className="flex items-center">
                <SlidersHorizontal size={18} className="mr-2" />
                <span>Filtres</span>
              </Button>
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
                activeFilters.includes('price') 
                  ? 'bg-brand-blue text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => toggleFilter('price')}
            >
              Prix <ChevronDown size={16} className="ml-1" />
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilters.includes('type') 
                  ? 'bg-brand-blue text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => toggleFilter('type')}
            >
              Type de logement
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilters.includes('rooms') 
                  ? 'bg-brand-blue text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => toggleFilter('rooms')}
            >
              Chambres
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilters.includes('amenities') 
                  ? 'bg-brand-blue text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => toggleFilter('amenities')}
            >
              Équipements
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilters.includes('rating') 
                  ? 'bg-brand-blue text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => toggleFilter('rating')}
            >
              Note
            </button>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                &lt;
              </button>
              <button className="w-10 h-10 rounded-lg bg-brand-blue text-white flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                2
              </button>
              <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                3
              </button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                10
              </button>
              <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Properties;
