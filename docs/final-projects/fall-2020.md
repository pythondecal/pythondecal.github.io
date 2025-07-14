---
title: Fall 2020
parent: Final Projects
nav_order: 10
---

# Fall 2020 Final Projects
Please enjoy the final projects of students during the Fall 2021 semester.

---

## Trappist
**Group Members:** Caytyn, Paige and Victoria

<video width="100%" controls loop autoplay muted>
  <source src="/assets/projects/fall-2020/Group1/Group1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## Animated 3D Color-Magnitude Diagram of Messier 4 Globular Cluster
**Group Members:** Kingsley Ehrich and Riley Clark

<div class="slider" id="slider-group2">
  <img class="slide-img" src="/assets/projects/fall-2020/Group2/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="changeSlide('slider-group2', -1)">Previous</button>
  <button onclick="changeSlide('slider-group2', 1)">Next</button>
  <p id="slider-group2-status">Slide 1 of 12</p>
</div>

---

## ANIMATED HR DIAGRAM
**Group Members:** Victor Cruz Ramos and Nadia Laswi

<div class="slider" id="slider-group3">
  <img class="slide-img" src="/assets/projects/fall-2020/Group3/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="changeSlide('slider-group3', -1)">Previous</button>
  <button onclick="changeSlide('slider-group3', 1)">Next</button>
  <p id="slider-group3-status">Slide 1 of 10</p>
</div>

---

<script>
  const slideData = {
      "slider-group2": [
          "/assets/projects/fall-2020/Group2/slide1.jpg",
          "/assets/projects/fall-2020/Group2/slide2.jpg",
          "/assets/projects/fall-2020/Group2/slide3.jpg",
          "/assets/projects/fall-2020/Group2/slide4.jpg",
          "/assets/projects/fall-2020/Group2/slide5.jpg",
          "/assets/projects/fall-2020/Group2/slide6.jpg",
          "/assets/projects/fall-2020/Group2/slide7.jpg",
          "/assets/projects/fall-2020/Group2/slide8.jpg",
          "/assets/projects/fall-2020/Group2/slide9.jpg",
          "/assets/projects/fall-2020/Group2/slide10.jpg",
          "/assets/projects/fall-2020/Group2/slide11.jpg",
          "/assets/projects/fall-2020/Group2/slide12.jpg"
    ],
      "slider-group3": [
          "/assets/projects/fall-2020/Group3/slide1.jpg",
          "/assets/projects/fall-2020/Group3/slide2.jpg",
          "/assets/projects/fall-2020/Group3/slide3.jpg",
          "/assets/projects/fall-2020/Group3/slide4.jpg",
          "/assets/projects/fall-2020/Group3/slide5.jpg",
          "/assets/projects/fall-2020/Group3/slide6.jpg",
          "/assets/projects/fall-2020/Group3/slide7.jpg",
          "/assets/projects/fall-2020/Group3/slide8.jpg",
          "/assets/projects/fall-2020/Group3/slide9.jpg",
          "/assets/projects/fall-2020/Group3/slide10.jpg"
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