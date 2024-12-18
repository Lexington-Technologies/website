import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, color }) => (
  <div className={`${color} rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl flex flex-col`}>
    <div className="flex justify-center items-center h-48 mb-4">
      <img 
        src={image} 
        alt={title} 
        className="w-[70%] object-contain"
      />
    </div>
    <h3 className="text-gray-800 font-medium text-xl mb-3">{title}</h3>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    {/* <button className="text-sky-400 font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300">
      Read More
      <span className="text-lg">→</span>
    </button> */}
  </div>
);

export default ServiceCard;