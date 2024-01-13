import React, { useEffect, useState } from "react";

function Carousell() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId;

  useEffect(() => {
    console.log("useEffect running");
    // startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  const slides = [
    "https://picsum.photos/id/28/367/267",
    "https://picsum.photos/id/10/367/267",
    "https://picsum.photos/id/25/367/267",
    "https://picsum.photos/id/24/367/267",
  ];

  const showSlide = (index) => {
    console.log(index);
    setCurrentIndex(index);
  };

  const navigate = (direction) => {
    const newIndex = (currentIndex + direction + slides.length) % slides.length;
    showSlide(newIndex);
  };

  const autoSlide = () => {
    navigate(1);
  };

  const startAutoSlide = () => {
    // Start autoslide and remember the intervalId
    intervalId = setInterval(autoSlide, 1000); // Slide every 3 seconds
  };

  const stopAutoSlide = () => {
    // Stop autoslide
    clearInterval(intervalId);
  };

  return (
    <div className="flex">
      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="carousel-item"
              onClick={() => {
                stopAutoSlide(); // Stop autoslide when manually navigating
                navigate(index - currentIndex); // Calculate the direction based on the clicked slide
                startAutoSlide(); // Restart autoslide after manual navigation
              }}
            >
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousell;
