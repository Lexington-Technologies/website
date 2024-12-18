import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../loader/Loader';
import { experts } from './expert.data';
import ExpertCard from './ExpertCard';

export function Expert() {
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

  return (
    <div id="expertise"> 
    <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 mb-6">
        Areas of Expertise
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At Lexington Technologies, our aim is to help our clients succeed in the digital age. Here's why partnering with us will give you a distinctive competitive advantage:
          </p> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.slice(0,3).map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </div>
        <div className="flex items-center justify-center py-10 hover:opacity-100 transition-opacity">
          <Link to={'/area-of-expertise'} className="px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition-colors">
            See more
          </Link>
        </div>
      </div>
    </section>
  </div>
  );
}