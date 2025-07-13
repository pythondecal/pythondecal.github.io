---
title: Fall 2022
parent: Final Projects
nav_order: 6
---

# Fall 2022 Final Projects
Please enjoy the final projects of students during the Fall 2022 semester.

---

## Simulating Supernovae Shockwaves using the Taylor-von Neumann-Sedov Blast-Wave Solution
**Group Members:** Tabitha Esposito, Daniel Gilbert, Marriah Henriques, Richard Saeed, Rafee Samreuang, and Reanna Varsani

<div class="slider" id="slider-group1">
  <img class="slide-img" src="/assets/projects/fall-2022/Group1/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="changeSlide('slider-group1', -1)">Previous</button>
  <button onclick="changeSlide('slider-group1', 1)">Next</button>
  <p id="slider-group1-status">Slide 1 of 9</p>
</div>

---

## Simulating Quantum
**Group Members:** Vy La, Thien Kim Le and Yusaku Tanaka

<div class="slider" id="slider-group2">
  <img class="slide-img" src="/assets/projects/fall-2022/Group2/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="changeSlide('slider-group2', -1)">Previous</button>
  <button onclick="changeSlide('slider-group2', 1)">Next</button>
  <p id="slider-group2-status">Slide 1 of 8</p>
</div>

---

## Simulating a Spiral Galaxy
**Group Members:** Navya Gupta, Neel Agrawal, Quintin Araghi, Mira Bhatt and Anthony Arata

<div class="slider" id="slider-group3">
  <img class="slide-img" src="/assets/projects/fall-2022/Group3/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="changeSlide('slider-group3', -1)">Previous</button>
  <button onclick="changeSlide('slider-group3', 1)">Next</button>
  <p id="slider-group3-status">Slide 1 of 13</p>
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
    ],
      "slider-group1": [
          "/assets/projects/fall-2022/Group2/slide1.jpg",
          "/assets/projects/fall-2022/Group2/slide2.jpg",
          "/assets/projects/fall-2022/Group2/slide3.jpg",
          "/assets/projects/fall-2022/Group2/slide4.jpg",
          "/assets/projects/fall-2022/Group2/slide5.jpg",
          "/assets/projects/fall-2022/Group2/slide6.jpg",
          "/assets/projects/fall-2022/Group2/slide7.jpg",
          "/assets/projects/fall-2022/Group2/slide8.jpg"
    ],
      "slider-group1": [
          "/assets/projects/fall-2022/Group3/slide1.jpg",
          "/assets/projects/fall-2022/Group3/slide2.jpg",
          "/assets/projects/fall-2022/Group3/slide3.jpg",
          "/assets/projects/fall-2022/Group3/slide4.jpg",
          "/assets/projects/fall-2022/Group3/slide5.jpg",
          "/assets/projects/fall-2022/Group3/slide6.jpg",
          "/assets/projects/fall-2022/Group3/slide7.jpg",
          "/assets/projects/fall-2022/Group3/slide8.jpg",
          "/assets/projects/fall-2022/Group3/slide9.jpg",
          "/assets/projects/fall-2022/Group3/slide10.jpg",
          "/assets/projects/fall-2022/Group3/slide11.jpg",
          "/assets/projects/fall-2022/Group3/slide12.jpg",
          "/assets/projects/fall-2022/Group3/slide13.jpg"
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