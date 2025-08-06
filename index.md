---
title: Home
layout: home
nav_order: 1
description: The Python DeCal at UC Berkeley. Learn Python and improve your computing skills. A course designed by undergraduates for undergraduates in the astrophysics major.
permalink: /
---

# ASTRON 98: Python DeCal
{: .fs-9 style="margin-bottom: 0.25rem;" }

## Introduction to Python for UC Berkeley astrophysics students
{: .fs-6 style="margin-top: 0; margin-bottom: 0.75rem;" }

Now accepting applications for the **Fall 2025 semester**!
{: .fs-6 .fw-300 style="margin-top: 0;" }

[Apply for Fall 2025](https://forms.gle/rrsHmvT1r6EB1xut8){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }

---

## About the Course

The Python DeCal is a course designed by undergraduates for undergraduates to learn the basics of Python, plotting, and data analysis, specifically tailored for the UC Berkeley Astrophysics major. 

No prior programming experience required!

## Logistics

- **Class Times**: Mondays & Wednesdays, 4:00–5:00 PM
- **Location**: Campbell Hall 131
- **Units**: 2

## How to Apply

To apply for the Fall 2025 semester, please [fill out this Google Form](https://forms.gle/rrsHmvT1r6EB1xut8).

Applications are due no later **August 29th, 2025**. We will send out enrollment codes on a rolling basis. Please check your email frequently.

## Check out Final Projects from Spring 2025

<section class="tiles">

  <a href="/docs/final-projects/spring-2025" class="tile">
    <img src="/assets/images/creation.png" alt="Pillars of Creation">
    <div class="overlay"></div>
    <div class="text">
      <div class="title">Final Projects</div>
      <div class="year">Spring 2025</div>
      <div class="description">Take a look at our most recent spring showcase.</div>
    </div>
  </a>

</section>

## Learn More

- [Syllabus](docs/syllabus.md)
- [Weekly Schedule](docs/schedule.md)
- [Resources](docs/resources.md)
- 
If you have any questions, comments, or concerns, please e-mail the Head Instructor Brianna Peck at bpeck114@berkeley.edu


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

    a.tile {
        text-decoration: none;
        color: inherit;
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