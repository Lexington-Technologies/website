import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { newsData } from './news.data';
import { Loader } from '../loader/Loader';
import { useEffect, useState } from 'react';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const news = newsData.find(item => item.id === id);
      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    
        // Cleanup timeout
        return () => clearTimeout(timer);
      }, []);
    
      // If loading, return the Loader
      if (isLoading) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <Loader />
          </div>
        );
      }
  

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">News not found</h2>
          <Link
            to="/"
            className="text-sky-500 hover:text-sky-600 flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }
  

  return (
    <article className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            {news.title}
          </h1>
          
          <div className="flex items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{news.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5" />
              <span>{news.category}</span>
            </div>
          </div>
        </header>

        <div className="mb-12">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>

        <div className="psky psky-lg max-w-none">
          {news.content.map((section, index) => (
            <div key={index} className="mb-8">
              {section.subheading && (
                <h2 className="text-2xl font-medium text-gray-900 mb-4">
                  {section.subheading}
                </h2>
              )}
              {section.text && <p className="text-gray-600">{section.text}</p>}
              {section.image && (
                <img
                  src={section.image}
                  alt={section.imageAlt || ''}
                  className="w-full rounded-xl my-8"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default NewsDetail;