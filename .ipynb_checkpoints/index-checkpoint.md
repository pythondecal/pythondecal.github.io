---
title: Home
layout: home
nav_order: 1
description: "Just the Docs is a responsive Jekyll theme with built-in search that is easily customizable and hosted on GitHub Pages."
permalink: /
---

# ASTRON 98: Python DeCal
{: .fs-9 }

## Introduction to Python for Astronomers
{: .fs-9 }

Now accepting applications for the **Fall 2025 semester**!
{: .fs-6 .fw-300 }

<div class="d-flex flex-wrap align-items-center gap-2 mb-4">

[Apply for Fall 2025](https://forms.gle/rrsHmvT1r6EB1xut8){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }

<button class="btn js-toggle-dark-mode">Preview dark color scheme</button>

</div>

```yaml
# Color scheme supports "light" (default) and "dark"
color_scheme: dark
```

<button class="btn js-toggle-dark-mode">Preview dark color scheme</button>

<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
    toggleDarkMode.textContent = 'Preview dark color scheme';
  } else {
    jtd.setTheme('dark');
    toggleDarkMode.textContent = 'Return to the light side';
  }
});
</script>

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

## Learn More

- [Syllabus](docs/syllabus.md)
- [Weekly Schedule](docs/schedule.md)
- [Resources](docs/resources.md)
- 
If you have any questions, comments, or concerns, please e-mail the Head Instructor Brianna Peck at bpeck114@berkeley.edu