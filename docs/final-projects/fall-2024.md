---
title: Fall 2024
parent: Final Projects
nav_order: 2
---

<div id="slider">
  <img id="slide-img" src="/assets/projects/spring-2025/Deacon_Olivia/slide1.jpg" style="max-width: 100%;">
  <br>
  <button id="prevBtn" onclick="prevSlide()">Previous</button>
  <button id="nextBtn" onclick="nextSlide()">Next</button>
  <p id="status">Slide 1 of 2</p>
</div>

<script>
  const slides = [
    "/assets/projects/spring-2025/Deacon_Olivia/slide1.jpg",
    "/assets/projects/spring-2025/Deacon_Olivia/slide2.jpg"
  ];
  let currentIndex = 0;

  function updateSlide() {
    const img = document.getElementById("slide-img");
    const status = document.getElementById("status");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    img.src = slides[currentIndex];
    status.textContent = `Slide ${currentIndex + 1} of ${slides.length}`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
  }

  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlide();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlide();
    }
  }

  updateSlide(); // initialize on load
</script>

