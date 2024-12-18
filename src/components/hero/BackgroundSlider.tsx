import { useEffect, useState } from 'react';

const backgroundImages = [
  "/public/bg/bg1.jpg",
  "/public/bg/bg2.png",
  "/public/bg/bg3.png",
  "/public/bg/bg4.jpg",
  "/public/bg/bg5.jpg",
  "/public/bg/bg6.jpg",
];

export function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 w-full h-full transition-opacity duration-2000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: -20,
          }}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/60 z-[-10]" />
    </>
  );
}