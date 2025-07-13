---
title: Final Projects
nav_order: 3
has_children: true
permalink: /docs/final-projects/
---

# Final Projects

Each semester our students complete a Final Project and give a presentation in front of the class. To view student work from previous years, please see below.

<style>
.card-grid {
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
  text-decoration: none;
  font-family: sans-serif;
  transition: transform 0.3s ease;
  color: white;
}

.card * {
  color: white !important; /* Ensure all nested text stays white */
}

.card:hover {
  transform: scale(1.03);
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.card:hover::before {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.card-2025s::before {
  background-image: url('/assets/projects/spring-2025/creation.png');
}
</style>

<div class="card-grid">

  <a href="/docs/final-projects/spring-2025" class="card card-2025s">
    <div class="card-content">
      <h3>FINAL PROJECTS<br>Spring 2025</h3>
      <p>Take a look at student work from our recent spring showcase.</p>
    </div>
  </a>

</div>

<div class="card-grid">

  <a href="docs/final-projects/spring-2025" class="card card-2025s">
    <div class="card-content">
      <h3>FINAL PROJECTS<br>Spring 2025</h3>
      <p>Take a look at student work from our recent spring showcase.</p>
    </div>
  </a>

</div>
