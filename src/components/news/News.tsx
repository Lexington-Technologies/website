import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader } from '../loader/Loader';
import NewsCarousel from './NewsCarousel';

export function News() {
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
      <div className=" flex  justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div id="news">
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden"
    >
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay informed about our latest developments, events, and success stories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <NewsCarousel />
        </motion.div>
      </div>
    </motion.section>
    </div>
  );
}

export default News;
