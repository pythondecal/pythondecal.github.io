---
title: Spring 2021
parent: Final Projects
nav_order: 9
---

# Spring 2021 Final Projects
Please enjoy the final projects of students during the Spring 2021 semester.

---

## TRAPPIST-1 To-Scale Simulation
**Group Members:** Faby Hernandez, Derek Kaplan and Alondra Najera

<div class="slider" id="slider-group1">
  <img class="slide-img" src="/assets/projects/spring-2021/Group1/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="changeSlide('slider-group1', -1)">Previous</button>
  <button onclick="changeSlide('slider-group1', 1)">Next</button>
  <p id="slider-group1-status">Slide 1 of 8</p>
</div>

<video width="100%" controls loop autoplay muted>
  <source src="/assets/projects/spring-2021/Group1/Group1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## HR/CMD Diagrams for Messier 15 and Messier 45
**Group Members:** Michelangelo D and Rav K

<div class="slider" id="slider-group2">
  <img class="slide-img" src="/assets/projects/spring-2021/Group2/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="changeSlide('slider-group2', -1)">Previous</button>
  <button onclick="changeSlide('slider-group2', 1)">Next</button>
  <p id="slider-group2-status">Slide 1 of 13</p>
</div>

---






<script>
  const slideData = {
      "slider-group1": [
          "/assets/projects/spring-2021/Group1/slide1.jpg",
          "/assets/projects/spring-2021/Group1/slide2.jpg",
          "/assets/projects/spring-2021/Group1/slide3.jpg",
          "/assets/projects/spring-2021/Group1/slide4.jpg",
          "/assets/projects/spring-2021/Group1/slide5.jpg",
          "/assets/projects/spring-2021/Group1/slide6.jpg",
          "/assets/projects/spring-2021/Group1/slide7.jpg",
          "/assets/projects/spring-2021/Group1/slide8.jpg"
    ],
      "slider-group2": [
          "/assets/projects/spring-2021/Group2/slide1.jpg",
          "/assets/projects/spring-2021/Group2/slide2.jpg",
          "/assets/projects/spring-2021/Group2/slide3.jpg",
          "/assets/projects/spring-2021/Group2/slide4.jpg",
          "/assets/projects/spring-2021/Group2/slide5.jpg",
          "/assets/projects/spring-2021/Group2/slide6.jpg",
          "/assets/projects/spring-2021/Group2/slide7.jpg",
          "/assets/projects/spring-2021/Group2/slide8.jpg",
          "/assets/projects/spring-2021/Group2/slide9.jpg",
          "/assets/projects/spring-2021/Group2/slide10.jpg",
          "/assets/projects/spring-2021/Group2/slide11.jpg",
          "/assets/projects/spring-2021/Group2/slide12.jpg",
          "/assets/projects/spring-2021/Group2/slide13.jpg"
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