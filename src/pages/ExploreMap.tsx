
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { properties } from '@/data/properties';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import PropertyCard from '@/components/PropertyCard';

const ExploreMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  
  // Get unique locations
  const locations = Array.from(new Set(properties.map(p => p.location)));

  // Filter properties based on selected location
  const filteredProperties = selectedLocation === 'all' 
    ? properties 
    : properties.filter(p => p.location === selectedLocation);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-6 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 font-poppins">Explorer la carte</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar with filters and property list */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Filtres</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Localisation
                      </label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Toutes les localisations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Toutes les localisations</SelectItem>
                          {locations.map(location => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-2">
                  {filteredProperties.length} logement{filteredProperties.length > 1 ? 's' : ''} trouvé{filteredProperties.length > 1 ? 's' : ''}
                </h2>
                
                <div className="hidden lg:block space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto pr-2">
                  {filteredProperties.map(property => (
                    <div key={property.id} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <PropertyCard property={property} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Map container */}
            <div className="lg:col-span-2 h-[calc(100vh-200px)]">
              <Card className="h-full">
                <CardContent className="p-2 h-full">
                  <Map properties={filteredProperties} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExploreMap;
