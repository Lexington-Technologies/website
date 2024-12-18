import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  image,
  category,
}) => {
  return (
    <Link to={`/news/${id}`}>
      <article className="w-[400px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-500 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
          
          <div className="flex items-center text-sky-500 font-medium group-hover:gap-2 transition-all duration-300">
            Read More <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;