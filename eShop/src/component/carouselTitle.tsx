import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['./banner-01.jpg', './banner-02.jpg', './banner-03.jpg'];

  // Déclaration de la fonction goToSlide
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const nextSlide = () => {
      setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(nextSlide, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const slideStyles = {
    transform: `translateX(-${activeIndex * 100}%)`,
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full rounded-tl-150 rounded-tr-300 rounded-bl-300 rounded-br-150 overflow-hidden">
        <div className="flex transition-transform duration-1000" style={slideStyles}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel Slide ${index}`}
              className="w-full"
            />
          ))}
        </div>
      </div>
      <p className="text-bestWhite text-center my-4 w-3/4 text-xs">See how your users experience your website in realtime or viewtrends to see any changes in performance over time.</p>
      <div className="flex">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-3 rounded-full ${index === activeIndex ? 'bg-bestWhite' : 'bg-black'}`}
            onClick={() => goToSlide(index)} // Utilisation de la fonction goToSlide
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
