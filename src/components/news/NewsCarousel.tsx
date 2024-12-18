import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newsData } from './news.data';
import NewsCard from './NewsCard';

const NewsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        // Reset to start when reaching the end
        scrollContainer.scrollLeft = 0;
      } else {
        // Smooth scroll by small increments
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 50);
    return () => clearInterval(intervalId);
  }, [isAutoScrolling]);

  const scrollToDirection = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    // Pause auto-scrolling during manual navigation
    setIsAutoScrolling(false);
    
    const scrollAmount = direction === 'left' ? -400 : 400;
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });

    // Resume auto-scrolling after manual navigation
    setTimeout(() => setIsAutoScrolling(true), 1000);
  };

  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Buttons */}
      <NavigationButton 
        direction="left" 
        onClick={() => scrollToDirection('left')} 
      />
      <NavigationButton 
        direction="right" 
        onClick={() => scrollToDirection('right')} 
      />

      {/* News Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 py-6 px-10 overflow-hidden scroll-smooth"
      >
        {/* Double the news items for seamless infinite scroll */}
        {[...newsData, ...newsData].map((news, index) => (
          <div key={`${news.id}-${index}`} className="flex-shrink-0">
            <NewsCard {...news} />
          </div>
        ))}
      </div>
    </div>
  );
};

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 z-10
        ${direction === 'left' ? 'left-2' : 'right-2'}
        bg-white/90 hover:bg-white
        shadow-lg hover:shadow-xl
        rounded-full p-3
        text-gray-600 hover:text-gray-900
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-sky-500
      `}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} news`}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};

export default NewsCarousel;