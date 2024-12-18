import React from 'react';

interface ContentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-8 bg-gray-100">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-2xl font-serif text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ContentCard;