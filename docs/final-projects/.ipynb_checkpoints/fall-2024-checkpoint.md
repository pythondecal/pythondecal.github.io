---
title: Fall 2024
parent: Final Projects
nav_order: 2
---

<div id="slider">
  <img id="slide-img" src="/assets/projects/spring-2025/Deacon_Olivia/slide1.jpg" style="max-width: 100%;">
  <br>
  <button onclick="prevSlide()">Previous</button>
  <button onclick="nextSlide()">Next</button>
</div>

<script>
  const slides = [
    "/assets/projects/spring-2025/Deacon_Olivia/slide1.jpg",
   "/assets/projects/spring-2025/Deacon_Olivia/slide2.jpg"
  ];
  let currentIndex = 0;

  function updateSlide() {
    document.getElementById("slide-img").src = slides[currentIndex];
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
</script>
