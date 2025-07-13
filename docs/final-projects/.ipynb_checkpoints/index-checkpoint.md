---
title: Final Projects
nav_order: 3
has_children: true
permalink: /docs/final-projects/
---

# Final Projects

Each semester our students complete a Final Project and give a presentation in front of the class. To view student work from previous years, please see below.

<section class="card-grid">

  <a href="docs/final-projects/spring_2025" class="card">
    <img src="assets/projects/spring-2025/creation.png" alt="Tile 1">
    <div class="card-content">
      <h2>Final Projects Spring 2025</h2>
      <p>Take a gander at the fantastic final projects from our first semester running the course.</p>
    </div>
  </a>

  <a href="docs/final-projects/fall_2024" class="card">
    <img src="assets/projects/spring-2025/creation.png" alt="Tile 2">
    <div class="card-content">
      <h2>Final Projects Fall 2024</h2>
      <p>Wonderful projects made by students of the course last semester!</p>
    </div>
  </a>

  <a href="docs/final-projects/fall_2020" class="card">
    <img src="assets/projects/spring-2025/creation.png" alt="Tile 3">
    <div class="card-content">
      <h2>Final Projects Fall 2020</h2>
      <p>Some amazing and diverse projects for your pleasure!</p>
    </div>
  </a>

</section>


<style>.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.card {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  font-family: sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  background: black;
  color: white;
}

.card:hover {
  transform: scale(1.03);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.card-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4); /* dark overlay */
  color: white;
  z-index: 1;
}

.card-content h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.card-content p {
  margin: 0;
  font-size: 1rem;
}
</style>
