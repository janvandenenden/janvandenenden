import React from "react";
import { useState } from "react";

const Slideshow = (images) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + iamges.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center">
        {images[currentSlide]}
      </div>
      <button
        onClick={handlePreviousSlide}
        className="absolute top-0 left-0 mt-10 ml-10 px-4 py-3 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Previous
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-0 right-0 mt-10 mr-10 px-4 py-3 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Next
      </button>
    </div>
  );
};

export default Slideshow;
