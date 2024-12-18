import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    title: "Cloud Infrastructure",
  },
  {
    url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    title: "Software Development",
  },
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Tech Innovation",
  },
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    title: "Data Center",
  },
  {
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Machine Learning",
  },
];

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isAutoScrolling]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollPosition(scrollRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 1000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollPosition - walk;
  };

  const handleScrollLeft = () => {
    if (!scrollRef.current) return;
    setIsAutoScrolling(false);
    scrollRef.current.scrollLeft -= 320;
    setTimeout(() => setIsAutoScrolling(true), 1000);
  };

  const handleScrollRight = () => {
    if (!scrollRef.current) return;
    setIsAutoScrolling(false);
    scrollRef.current.scrollLeft += 320;
    setTimeout(() => setIsAutoScrolling(true), 1000);
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gallary
          </h2>
          {/* <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our cutting-edge technology solutions that drive digital transformation and push the boundaries of innovation.
          </p> */}
        </div>

        <div className="relative group">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

          {/* Navigation Buttons */}
          <button
            onClick={handleScrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleScrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Slider */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: 'smooth' }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {/* Double the images for seamless loop */}
            {[...images, ...images].map((image, index) => (
              <div
                key={`${image.title}-${index}`}
                className="relative flex-shrink-0 group/item"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-[300px] h-[400px] object-cover rounded-lg"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-lg font-semibold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}