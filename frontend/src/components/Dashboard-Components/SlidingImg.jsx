import { useState, useEffect, useRef } from "react";
import img1 from "/src/assets/events/bts.jpg";
import img2 from "/src/assets/events/halloween.jpg";
import img3 from "/src/assets/events/reinanay.jpg";

const images = [img1, img2, img3];

export default function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.touches[0].clientX;
    const difference = touchStartX.current - touchEndX;
    if (difference > 50) nextSlide();
    if (difference < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full max-w-3xl mx-auto overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[120%] h-[600px] object-cover"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 px-4 py-2 rounded-r"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 px-4 py-2 rounded-l"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-4 w-4 rounded-full cursor-pointer ${
              slideIndex === index ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
