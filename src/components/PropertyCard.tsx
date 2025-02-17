import React from 'react';
import { Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{location}</p>
        <p className="text-2xl font-bold text-blue-600 mb-4">{price}</p>
        <div className="flex justify-between text-gray-600">
          {beds > 0 && (
            <div className="flex items-center">
              <Bed className="w-5 h-5 mr-2" />
              <span>{beds} Beds</span>
            </div>
          )}
          {baths > 0 && (
            <div className="flex items-center">
              <Bath className="w-5 h-5 mr-2" />
              <span>{baths} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <Square className="w-5 h-5 mr-2" />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;