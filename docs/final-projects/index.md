---
title: Final Projects
nav_order: 3
has_children: true
permalink: /docs/final-projects/
---

# Final Projects

Each semester our students complete a Final Project and give a presentation in front of the class. To view student work from previous years, please see below.


<style>
    body {
        margin: 0;
        font-family: 'Source Sans Pro', sans-serif;
        background: #f4f4f4;
    }

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
      background-color: rgba(255, 192, 203, 0.5); /* pink */
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    .tile:hover .overlay {
      opacity: 0;
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

    @media (max-width: 700px) {
      .tile:hover {
        max-width: 100%;
        height: 320px;
      }
    }
</style>

<section class="tiles">
    <div class="tile">
        <img src="assets/projects/spring-2025/creation.png" alt="Pillars of Creation">
        <div class="overlay"></div>
        <div class="text">
            <div class="title">Final Projects</div>
            <div class="year">Spring 2025</div>
            <div class="description">Take a look at our most recent spring showcase.</div>
        </div>
    </div>
    <div class="tile">
      <img src="assets/projects/fall-2024/crab.jpg" alt="Crab Nebula">
      <div class="overlay"></div>
      <div class="text">
        <div class="title">Final Projects</div>
        <div class="year">Fall 2024</div>
        <div class="description">Amazing work from undergraduates!</div>
      </div>
    </div>
    <div class="tile">
      <img src="assets/projects/spring-2024/hat.jpg" alt="Sombrero Galaxy">
      <div class="overlay"></div>
      <div class="text">
        <div class="title">Final Projects</div>
        <div class="year">Spring 2024</div>
        <div class="description">Projects exploring data, science, and creativity.</div>
      </div>
    </div>
    <div class="tile">
      <img src="assets/projects/fall-2024/orion.jpg" alt="Galaxy 4">
      <div class="overlay"></div>
      <div class="text">
        <div class="title">Final Projects</div>
        <div class="year">Fall 2024</div>
        <div class="description">More amazing student work from our class.</div>
      </div>
    </div>

</section>