---
title: Instructors
description: Meet the current Python DeCal undergraduate instructors.
nav_order: 5
has_children: true
permalink: /docs/instructors/
---

# Current Instructors and Interns

The following is a list of current instructors and interns on the Python DeCal staff. 

<div class="photo-rotator-wrap">
  <h2>Meet the Python DeCalTeam</h2>

  <div class="photo-rotator" id="rotator-team" data-interval="10000" aria-live="polite">
    <!-- Headshots (all instructors + interns) -->
    <img src="/assets/images/staff-photos/mariam.jpg"  alt="Mariam Helal"  data-name="Mariam Helal">
    <img src="/assets/images/staff-photos/will.jpg"  alt="William Lee"  data-name="William Lee">
    <img src="/assets/images/staff-photos/annecy.jpg"  alt="Annecy Jiang"  data-name="Annecy Jiang">
    <img src="/assets/images/staff-photos/hannah.jpg"  alt="Hannah Eghtedari"  data-name="Hannah Eghtedari">
    <img src="/assets/images/staff-photos/makaio.jpg"  alt="Makaio Jimenez"  data-name="Makaio Jimenez">
    <img src="/assets/images/staff-photos/milana.jpg"  alt="Milana Berhe"  data-name="Milana Berhe">
    <img src="/assets/images/staff-photos/nathan.png"  alt="Nathan DeBeech"  data-name="Nathan DeBeech">
    <img src="/assets/images/staff-photos/safia.jpg"  alt="Safia Barmada"  data-name="Safia Barmada">
    <img src="/assets/images/staff-photos/olivia.png"  alt="Olivia Silvia"  data-name="Olivia Silvia">
  </div>

  <!-- Caption updates automatically -->
  <div class="rotator-caption" id="rotator-team-caption">Brianna Peck</div>

  <div class="rotator-controls">
    <button class="rotator-btn" data-target="rotator-team" data-action="prev" aria-label="Previous photo">‹</button>
    <button class="rotator-btn" data-target="rotator-team" data-action="next" aria-label="Next photo">›</button>
  </div>
</div>

## Instructors

| Name + Email   | Position(s)                                                         | Favorite Astronomical Object |
|----------------|---------------------------------------------------------------------|------------------------------|
| Katie Mora<br>(katherinemora@berkeley.edu)| Head Instructor (Spring 2026 – Present)<br>Instructor (Spring 2025 – Fall 2025)<br>Intern (Fall 2024)| JWST-ER1 |
| Mariam Helal<br>(mariam.helal@berkeley.edu)| Instructor (Fall 2025 – Present)<br>Intern (Spring 2025)| Io |
| William Lee<br>(williamlee8@berkeley.edu)| Instructor (Fall 2025 – Present)<br>Intern (Spring 2025)| Orion Nebula |
| Milana Berhe<br>(milana.berhe@berkeley.edu)| Instructor (Spring 2026– Present)<br>Intern (Fall 2025)| The Moon |
| Olivia Silvia<br>(olivia_lsilva@berkeley.edu)| Instructor (Spring 2026– Present)<br>Intern (Fall 2025)| Sirius A |
| Annecy Jiang<br>(annecyjiang@berkeley.edu)| Instructor (Fall 2026– Present)<br>Intern (Spring 2026)| - |
| Makaio Jimenez<br>(makaiojimenez@berkeley.edu)| Instructor (Fall 2026– Present)<br>Intern (Spring 2026)| - |
| Nathan DeBeech<br>(nathandebeech@berkeley.edu)| Instructor (Fall 2026– Present)<br>Intern (Spring 2026)| - |



## Interns

| Name + Email  | Position(s)        | Favorite Astronomical Object |
|---------------|--------------------|------------------------------|
| Hannah Eghtedari<br>(hannaheghtedari@berkeley.edu )| Intern (Fall 2026)| - |

## Faculty Sponsor

Aaron Parsons (aparsons@berkeley.edu)<br>(Fall 2025 - Present)

<img src="/assets/images/aaron_parsons.png" alt="Photo of Aaron Parsons" width="250">

## Previous Instructors and Interns

Check out the amazing people who have helped build and teach the Python DeCal over the years. 

[See past team members →](/docs/instructors/previous-instructors.md)
{: .btn .btn-outline }

<style>
  /* Separate width and height so we can make it a rectangle */
  :root {
    --rotator-width: 600px;   /* make wider */
    --rotator-height: 400px;  /* adjust height */
  }

  .photo-rotator-wrap {
    display: block;
    margin: 1.5rem auto 2.5rem;
    text-align: center; /* centers caption + buttons */
    max-width: min(100%, var(--rotator-width));
  }

  .photo-rotator {
    position: relative;
    width: var(--rotator-width);
    height: var(--rotator-height);
    margin: 0 auto; /* centers the rectangle */
    overflow: hidden;
    border-radius: 18px;
    box-shadow: 0 8px 26px rgba(0,0,0,.12);
  }

  .photo-rotator img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* crop to fill without distortion */
    opacity: 0;
    transition: opacity .5s ease;
  }
  .photo-rotator img.active { opacity: 1; }

  .rotator-caption {
    margin-top: .65rem;
    font-weight: 600;
  }

  .rotator-controls {
    display: flex;
    gap: .65rem;
    justify-content: center;
    margin-top: .5rem;
  }
  .rotator-btn {
    border: 0;
    padding: .4rem .7rem;
    border-radius: 999px;
    box-shadow: 0 2px 10px rgba(0,0,0,.12);
    cursor: pointer;
    background: #f2f2f2;
    font-size: 1.2rem;
    line-height: 1;
  }
  .rotator-btn:hover {
    background: #e8e8e8;
  }

  /* Mobile scaling */
  @media (max-width: 700px) {
    :root {
      --rotator-width: 90vw;
      --rotator-height: 60vw;
    }
  }
</style>

<script src="/assets/js/rotator.js" defer></script>
