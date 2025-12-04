import React from 'react';

interface CardProps {
  title: string;
  image: string;
  description?: string;
  price?: string;      
  rating?: number;     
  location?: string;   
  tag?: string;        
}

const Card: React.FC<CardProps> = ({ title, image, description, price, rating, location, tag }) => {
  return (
    <div className="relative min-w-[220px] max-w-[260px] rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-44 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {tag && (
          <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded-md shadow">
            {tag}
          </span>
        )}
        <button
          aria-label="favorite"
          className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
        >
          {/* heart placeholder */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-700">
            <path d="M12 21s-6.716-4.35-9.2-7.02C-1.2 9.87 3.2 4 8 6.5 10.4 7.9 12 10.2 12 10.2s1.6-2.3 4-3.7c4.8-2.5 9.2 3.37 5.2 7.48C18.716 16.65 12 21 12 21z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-medium leading-tight">{title}</h3>
            {location && <p className="text-xs text-gray-500 mt-1">{location}</p>}
          </div>
        </div>

        {description && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>}

        <div className="flex items-center justify-between mt-3 text-sm">
          <div className="flex items-center gap-2">
            {rating !== undefined && (
              <span className="text-xs text-gray-700 font-semibold">⭐ {rating.toFixed(2)}</span>
            )}
          </div>

          <div className="text-right">
            {price && <p className="font-semibold text-sm">{price}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
