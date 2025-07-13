---
title: Fall 2022
parent: Final Projects
nav_order: 6
---

# Fall 2022 Final Projects
Please enjoy the final projects of students during the Fall 2022 semester.

---

## Simulating Supernovae Shockwaves using the Taylor-von Neumann-Sedov Blast-Wave Solution
**Group Members:** Tabitha Esposito, Daniel Gilbert, Marriah Henriques, Richard Saeed, Rafee Samreuang, and
Reanna Varsani

<div class="slider" id="slider-group1">
  <img class="slide-img" src="/assets/projects/fall-2022/Group1/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="changeSlide('slider-group1', -1)">Previous</button>
  <button onclick="changeSlide('slider-group1', 1)">Next</button>
  <p id="slider-group1-status">Slide 1 of 9</p>
</div>

<script>
  const slideData = {
      "slider-group1": [
          "/assets/projects/fall-2022/Group1/slide1.jpg",
          "/assets/projects/fall-2022/Group1/slide2.jpg",
          "/assets/projects/fall-2022/Group1/slide3.jpg",
          "/assets/projects/fall-2022/Group1/slide4.jpg",
          "/assets/projects/fall-2022/Group1/slide5.jpg",
          "/assets/projects/fall-2022/Group1/slide6.jpg",
          "/assets/projects/fall-2022/Group1/slide7.jpg",
          "/assets/projects/fall-2022/Group1/slide8.jpg",
          "/assets/projects/fall-2022/Group1/slide9.jpg"
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