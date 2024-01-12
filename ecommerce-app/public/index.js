document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function autoSlide() {
    navigate(1);
  }

  function startAutoSlide() {
    // Start autoslide and remember the intervalId
    intervalId = setInterval(autoSlide, 3000); // Slide every 3 seconds
  }

  function stopAutoSlide() {
    // Stop autoslide
    clearInterval(intervalId);
  }

  // Initial display
  showSlide(currentIndex);

  // Set up automatic sliding
  startAutoSlide();

  // Set up click event listeners for manual navigation
  document.querySelector("#slide1").addEventListener("click", function () {
    stopAutoSlide(); // Stop autoslide when manually navigating
    navigate(1);
    startAutoSlide(); // Restart autoslide after manual navigation
  });

  document.querySelector("#slide2").addEventListener("click", function () {
    stopAutoSlide();
    navigate(1);
    startAutoSlide();
  });

  document.querySelector("#slide3").addEventListener("click", function () {
    stopAutoSlide();
    navigate(1);
    startAutoSlide();
  });

  document.querySelector("#slide4").addEventListener("click", function () {
    stopAutoSlide();
    navigate(1);
    startAutoSlide();
  });
});
