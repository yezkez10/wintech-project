import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Carousel,
  initTE,
} from "tw-elements";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

initTE({ Carousel });

const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-item');

  let index = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
  }

  function goToSlide(newIndex) {
    index = newIndex;
    updateCarousel();
  }

  document.querySelectorAll('.btn-circle').forEach((btn, btnIndex) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSlide = event.target.getAttribute('href').substring(1); 
      const targetIndex = Array.from(slides).findIndex((slide) => slide.id === targetSlide);
      goToSlide(targetIndex);
    });
  });
