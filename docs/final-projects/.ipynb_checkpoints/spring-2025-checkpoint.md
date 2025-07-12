---
title: Spring 2025
parent: Final Projects
nav_order: 1
---

# Spring 2025 Final Projects
Please enjoy the final projects of students during the Spring 2025 semester.

---

## Simulating Tidal Waves with Gravitational Physics 
**Group Members:** Deacon Carreon and Olivia Silvia

The goal for this project was to model the tides of the Earth-Moon-Sun system. To do this, we
simulated the positions of all three objects using equations of gravity and mechanics. With these
distances we simulated the tidal wave heights at any inputted latitude on the Earth, ultimately
putting it into an animation, based on the function parameter of time.

<div class="slider-container" id="slider-deacon">
  <img src="/assets/projects/spring-2025/Deacon_Olivia/slide1.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Deacon_Olivia/slide2.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Deacon_Olivia/slide3.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Deacon_Olivia/slide4.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Deacon_Olivia/slide5.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Deacon_Olivia/slide6.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Deacon_Olivia/slide7.jpg" class="slide-image">
</div>

<div class="slider-nav">
  <button onclick="changeSlide('slider-deacon', -1)">⟵ Prev</button>
  <button onclick="changeSlide('slider-deacon', 1)">Next ⟶</button>
</div>

<video width="100%" controls loop autoplay muted>
  <source src="/assets/projects/spring-2025/Deacon_Olivia/Deacon_Olivia.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video width="100%" controls loop autoplay muted>
  <source src="/assets/projects/spring-2025/Deacon_Olivia/Deacon_Olivia2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

### Mass-Radius Relations of Neutron Stars
**Group Members:** Eva Li, Serina Mummert

This project investigates the mass-radius relationship found in neutron stars, the most
dense observable objects known to astronomers today. Utilizing python, we model
theoretical predictions for neutron star structures based upon packages including the
readily found solutions to the Tolman-Oppenheimer-Volkoff(TOV) equations and various
equations of state(EOS).

We compare these theoretical calculations to our observational data collected from
pulsars, x-ray binaries, and gravitational wave events. The goal is to enhance our
understanding of and find meaningful connections between observed neutron stars and
known theoretical predictions.

<div class="slider-container" id="slider-eva">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide1.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide2.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide3.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide4.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide5.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide6.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide7.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide8.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide9.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide10.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Eva_Serina/slide11.jpg" class="slide-image">
</div>

<div class="slider-nav">
  <button onclick="changeSlide('slider-eva', -1)">⟵ Prev</button>
  <button onclick="changeSlide('slider-eva', 1)">Next ⟶</button>
</div>

---

### Dark Matter Distribution of a Quasar-Galaxy Lensing System
**Group Members:** Charlie Beckner

My project is focused on plotting the distribution of dark matter of the galaxy in the gravitational
lensing system, DES J0408-5354. The main galaxy is bending the light of a distant quasar
behind it, creating three distinct lensing images and a clear Einstein radius arching around the
galaxy. To do this, I will utilize data about the system to find the mass of the dark matter
enclosed within the Einstein radius. I will then fit a mass-density model to find the scale radius
and scale density which I will then use to plot the density as a function of radius from the center
of the galaxy to visualize the distribution. To confirm my model is properly fitting the data, I
have generated mock test data. 

<div class="slider-container" id="slider-charlie">
  <img src="/assets/projects/spring-2025/Charlie/slide1.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Charlie/slide2.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Charlie/slide3.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Charlie/slide4.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Charlie/slide5.jpg" class="slide-image">
  <img src="/assets/projects/spring-2025/Charlie/slide6.jpg" class="slide-image">
</div>

<div class="slider-nav">
  <button onclick="changeSlide('slider-charlie', -1)">⟵ Prev</button>
  <button onclick="changeSlide('slider-charlie', 1)">Next ⟶</button>
</div>

---

### ???
**Group Members:** Yuang Li



## Other Projects

### Power Output 
**Group Members:** Giancarlo Ursellii


<style>
.slider-container {
  position: relative;
  max-width: 800px;
  margin: auto;
}

.slide-image {
  display: none;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.active-slide {
  display: block;
}

.slider-nav {
  text-align: center;
  margin-top: 10px;
}

.slider-nav button {
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 14px;
  cursor: pointer;
}
</style>

<script>
const slideIndexes = {};

function showSlide(sliderId, index) {
  const slides = document.querySelectorAll(`#${sliderId} .slide-image`);
  slideIndexes[sliderId] = (index + slides.length) % slides.length;
  slides.forEach((img, i) => {
    img.classList.toggle("active-slide", i === slideIndexes[sliderId]);
  });
}

function changeSlide(sliderId, direction) {
  showSlide(sliderId, slideIndexes[sliderId] + direction);
}

document.addEventListener("DOMContentLoaded", () => {
  const allSliders = document.querySelectorAll(".slider-container");
  allSliders.forEach((slider, i) => {
    const id = slider.id || `slider${i}`;
    slider.id = id;
    slideIndexes[id] = 0;
    showSlide(id, 0);
  });
});
</script>
