
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { PropertyType } from '@/data/properties';

interface PropertyCardProps {
  property: PropertyType;
  isFeatured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, isFeatured = false }) => {
  const { id, title, type, location, price, currency, period, rating, reviewCount, image, beds, baths, guests } = property;

  return (
    <div className={`property-card group ${isFeatured ? 'md:flex md:h-80' : ''}`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden ${isFeatured ? 'md:w-1/2 md:h-full' : 'h-48 sm:h-64'}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:text-brand-pink transition-colors">
          <Heart size={20} className="text-gray-600 group-hover:text-brand-pink" />
        </button>
        {property.host.isSuperhost && (
          <div className="absolute top-3 left-3 bg-brand-pink text-white text-xs px-2 py-1 rounded-full">
            Superhôte
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-4 ${isFeatured ? 'md:w-1/2 md:p-6 md:flex md:flex-col md:justify-between' : ''}`}>
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-gray-500">{type} • {location}</span>
            <div className="flex items-center">
              <Star size={16} className="text-brand-pink fill-current" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
              <span className="text-gray-500 text-sm ml-1">({reviewCount})</span>
            </div>
          </div>
          <Link to={`/property/${id}`}>
            <h3 className="text-lg font-medium mb-2 hover:text-brand-blue transition-colors">{title}</h3>
          </Link>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <span>{beds} {beds > 1 ? 'lits' : 'lit'}</span>
            <span>{baths} {baths > 1 ? 'salles de bain' : 'salle de bain'}</span>
            <span>{guests} {guests > 1 ? 'voyageurs' : 'voyageur'}</span>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="text-lg font-semibold">
            {currency}{price} <span className="text-sm text-gray-500 font-normal">/ {period}</span>
          </div>
          <Link 
            to={`/property/${id}`} 
            className="text-brand-blue hover:text-brand-pink text-sm font-medium"
          >
            Voir les détails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
