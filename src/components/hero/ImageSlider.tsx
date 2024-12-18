import { useEffect, useState } from 'react';

const images = [
  "/bg1.jpg",
  "/bg2.2.png",
  "/bg2.png",
  "/bg4.png",
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
        </div>
      ))}
    </div>
  );
}