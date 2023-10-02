import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <button className="prev-button" onClick={handlePrevClick}>
        &lt; Prev
      </button>
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="next-button" onClick={handleNextClick}>
        Next &gt;
      </button>
    </div>
  );
};

export default Carousel;
