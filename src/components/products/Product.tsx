import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Loader } from '../loader/Loader';
import { useEffect, useState } from 'react';
import { products } from './products.data';

const Products = () => {
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
    <div id="products">
    <div className=" px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 mb-6">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          With Lexington Technologies as your partner, you gain access to cutting-edge solutions that keep you ahead of the curve. Here are some of our innovative solutions.
          </p>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0,3).map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="flex items-center justify-center py-10 hover:opacity-100 transition-opacity">
          <Link to={'/products'} className="px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition-colors">
            View more
          </Link>
        </div>

      </div>
      </div>
  );
};

export default Products;
