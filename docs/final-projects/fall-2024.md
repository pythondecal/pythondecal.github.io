---
title: Fall 2024
parent: Final Projects
nav_order: 2
---

<!-- Slider 1 -->
<div class="slider" id="slider-deacon">
  <img class="slide-img" src="/assets/projects/spring-2025/Deacon_Olivia/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="changeSlide('slider-deacon', -1)">Previous</button>
  <button onclick="changeSlide('slider-deacon', 1)">Next</button>
  <p id="slider-deacon-status">Slide 1 of 2</p>
</div>

<!-- Slider 2 -->
<div class="slider" id="slider-brandon">
  <img class="slide-img" src="/assets/projects/spring-2025/Brandon/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="changeSlide('slider-brandon', -1)">Previous</button>
  <button onclick="changeSlide('slider-brandon', 1)">Next</button>
  <p id="slider-brandon-status">Slide 1 of 2</p>
</div>

<script>
  const slideData = {
    "slider-deacon": [
      "/assets/projects/spring-2025/Deacon_Olivia/slide1.jpg",
      "/assets/projects/spring-2025/Deacon_Olivia/slide2.jpg"
    ],
    "slider-brandon": [
      "/assets/projects/spring-2025/Brandon/slide1.jpg",
      "/assets/projects/spring-2025/Brandon/slide2.jpg"
    ]
  };

  const slideIndexes = {};

  function updateSlide(sliderId) {
    const img = document.querySelector(`#${sliderId} .slide-img`);
    const status = document.getElementById(`${sliderId}-status`);
    const slides = slideData[sliderId];
    const index = slideIndexes[sliderId];

    img.src = slides[index];
    status.textContent = `Slide ${index + 1} of ${slides.length}`;
  }

  function changeSlide(sliderId, direction) {
    const total = slideData[sliderId].length;
    if (!(sliderId in slideIndexes)) {
      slideIndexes[sliderId] = 0;
    }
    slideIndexes[sliderId] = Math.max(0, Math.min(slideIndexes[sliderId] + direction, total - 1));
    updateSlide(sliderId);
  }

  // Initialize all sliders on page load
  for (const sliderId in slideData) {
    slideIndexes[sliderId] = 0;
    updateSlide(sliderId);
  }
</script>
