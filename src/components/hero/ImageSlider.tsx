import { useEffect, useState } from 'react';

const images = [
  "/public/bg1.jpg",
  "/public/bg2.2.png",
  "/public/bg2.png",
  "/public/bg4.png",
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