
import React from 'react';
import { propertyTypes } from '@/data/properties';

const PropertyCategories: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {propertyTypes.map((type) => (
        <div 
          key={type.id} 
          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer border border-gray-100"
        >
          <div className="text-4xl mb-2">{type.icon}</div>
          <h3 className="font-medium mb-1">{type.name}</h3>
          <p className="text-sm text-gray-500">{type.count} logements</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyCategories;
