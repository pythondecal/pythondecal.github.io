---
title: Final Projects
nav_order: 2
has_children: true
permalink: /docs/final-projects/
---

# Final Projects

Each semester our students complete a Final Project and give a presentation in front of the class. To view student work from previous years, please see below.

<style>
  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    justify-items: center;
  }

  .tile {
    position: relative;
    width: 100%;
    max-width: 300px;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .tile:hover {
    max-width: 320px;
    height: 320px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  }

  .tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
    filter: brightness(50%);
  }

  .tile:hover img {
    filter: brightness(100%);
  }

  .overlay {
    position: absolute;
    inset: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  .tile:hover .overlay {
    opacity: 0;
  }

  .overlay-pink {
    background-color: rgba(255, 192, 203, 0.5); /* pink */
  }

  .overlay-blue {
    background-color: rgba(135, 206, 250, 0.5); /* cosmic blue */
  }

  .overlay-purple {
    background-color: rgba(147, 112, 219, 0.5); /* nebula purple */
  }

  .overlay-orange {
    background-color: rgba(255, 165, 0, 0.4); /* solar orange */
  }

  .overlay-galaxy {
    background-color: rgba(25, 25, 112, 0.6); /* deep space */
  }

  .text {
    position: absolute;
    inset: 0;
    color: white;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.2;
  }

  .year {
    font-size: 1.2rem;
    margin-top: 0.25rem;
  }

  .description {
    opacity: 0;
    transition: opacity 0.3s ease 0.1s;
    font-size: 1rem;
    margin-top: 1.2rem;
    max-width: 85%;
  }

  .tile:hover .description {
    opacity: 1;
  }

  a.tile {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 700px) {
    .tile:hover {
      max-width: 100%;
      height: 320px;
    }
  }
</style>

<section class="tiles">

  <a href="/docs/final-projects/spring-2025" class="tile">
    <img src="/assets/images/creation.png" alt="Pillars of Creation">
    <div class="overlay overlay-purple"></div>
    <div class="text">
      <div class="title">Final Projects</div>
      <div class="year">Spring 2025</div>
      <div class="description">Take a look at our most recent spring showcase.</div>
    </div>
  </a>

  <a href="/docs/final-projects/fall-2022" class="tile">
    <img src="/assets/images/moon.jpg" alt="Moon">
    <div class="overlay overlay-blue"></div>
    <div class="text">
      <div class="title">Final Projects</div>
      <div class="year">Fall 2022</div>
      <div class="description">Check out the Fall 2022 gallery of work.</div>
    </div>
  </a>

  <a href="/docs/final-projects/spring-2022" class="tile">
    <img src="/assets/images/jupiter.jpg" alt="Jupiter">
    <div class="overlay overlay-orange"></div>
    <div class="text">
      <div class="title">Final Projects</div>
      <div class="year">Spring 2022</div>
      <div class="description">Check out the Spring 2022 gallery of work.</div>
    </div>
  </a>

  <a href="/docs/final-projects/fall-2021" class="tile">
    <img src="/assets/images/keck.jpg" alt="Keck Observatory">
    <div class="overlay overlay-galaxy"></div>
    <div class="text">
      <div class="title">Final Projects</div>
      <div class="year">Fall 2021</div>
      <div class="description">Check out the Fall 2021 gallery of work.</div>
    </div>
  </a>

  <a href="/docs/final-projects/spring-2021" class="tile">
    <img src="/assets/images/milky.jpeg" alt="Milky Way">
    <div class="overlay overlay-pink"></div>
    <div class="text">
      <div class="title">Final Projects</div>
      <div class="year">Spring 2021</div>
      <div class="description">Check out the Spring 2021 gallery of work.</div>
    </div>
  </a>

  <a href="/docs/final-projects/fall-2020" class="tile">
    <img src="/assets/images/bh.jpg" alt="Black Hole">
    <div class="overlay overlay-purple"></div>
    <div class="text">
      <div class="title">Final Projects</div>
      <div class="year">Fall 2020</div>
      <div class="description">Check out the Fall 2020 gallery of work.</div>
    </div>
  </a>

</section>
