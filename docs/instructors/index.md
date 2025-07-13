---
title: Instructors
nav_order: 6
has_children: true
permalink: /docs/instructors/
---

See the list below of current, and previous, instructors and interns.

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
  color: white;
  text-decoration: none;
  font-family: sans-serif;
  transition: transform 0.3s ease;
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
}

.card-2025s::before {
  background-image: url('/assets/projects/spring-2025/creation.png');
}
</style>

<div class="card-grid">

<a href="docs/final-projects/spring-2025" class="card card-2025s">
  <div class="card-content">
    <h3>FINAL PROJECTS<br>SPRING 2025</h3>
    <p>Explore our most recent Spring 2025 showcase of student work.</p>
  </div>
</a>

</div>
