
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { PropertyType } from '@/data/properties';

interface MapProps {
  properties: PropertyType[];
}

const Map: React.FC<MapProps> = ({ properties }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [2.3522, 46.8566], // France center
      zoom: 5
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add properties markers
    map.current.on('load', () => {
      properties.forEach(property => {
        // Parse location to get coordinates (simple approach)
        const locationParts = property.location.split(', ');
        const city = locationParts[0];
        
        // Placeholder coordinates based on city (in a real app, you'd have actual coordinates)
        let coordinates: [number, number] | null = null;
        
        switch (city) {
          case 'Nice':
            coordinates = [7.2620, 43.7102];
            break;
          case 'Paris':
            coordinates = [2.3522, 48.8566];
            break;
          case 'Aix-en-Provence':
            coordinates = [5.4474, 43.5297];
            break;
          case 'Bordeaux':
            coordinates = [-0.5792, 44.8378];
            break;
          case 'Chamonix':
            coordinates = [6.8696, 45.9237];
            break;
          default:
            coordinates = [2.3522, 48.8566]; // Default to Paris
        }
        
        if (coordinates && map.current) {
          // Create popup
          const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div style="max-width: 220px">
                <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px; margin-bottom: 8px;" />
                <h3 style="font-weight: 600; font-size: 14px; margin-bottom: 4px;">${property.title}</h3>
                <p style="font-size: 12px; color: #666; margin-bottom: 4px;">${property.type} • ${property.location}</p>
                <p style="font-weight: 600; font-size: 14px;">${property.currency}${property.price} / ${property.period}</p>
              </div>
            `);

          // Create marker element
          const el = document.createElement('div');
          el.className = 'property-marker';
          el.style.backgroundColor = '#FF385C';
          el.style.width = '32px';
          el.style.height = '32px';
          el.style.borderRadius = '50%';
          el.style.display = 'flex';
          el.style.justifyContent = 'center';
          el.style.alignItems = 'center';
          el.style.color = 'white';
          el.style.fontWeight = 'bold';
          el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
          el.style.cursor = 'pointer';
          el.innerHTML = `<span>${property.currency}${property.price}</span>`;
          
          // Add marker to map
          new mapboxgl.Marker(el)
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map.current);
        }
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [properties, mapboxToken]);

  return (
    <div className="w-full h-full flex flex-col">
      {!mapboxToken && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Veuillez entrer votre token public Mapbox pour afficher la carte:
              </p>
              <input
                type="text"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm"
                placeholder="Entrez votre token public Mapbox"
                onChange={(e) => setMapboxToken(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Obtenez un token sur <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">mapbox.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
      <div ref={mapContainer} className={`w-full ${mapboxToken ? 'h-full' : 'h-96'} rounded-lg`} />
    </div>
  );
};

export default Map;
