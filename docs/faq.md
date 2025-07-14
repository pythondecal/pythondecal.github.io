---
title: FAQ     
nav_order: 6                    
---

# Frequently Asked Questions

---

<div class="faq-container">
    <div class="faq-item">
        <div class="faq-question">How many units is the Python DeCal (ASTRON 98)?</div>
        <div class="faq-answer">The Python DeCal is a <strong>2-unit</strong> Pass/No Pass class.</div>
</div>

<div class="faq-container">
    <div class="faq-item">
        <div class="faq-question">Do I need coding experience before taking the Python DeCal?</div>
        <div class="faq-answer">No! We are very welcoming to beginners :) in fact we actually target 
            students with <strong>zero</strong> coding experience. If you have taken previous Java 
            classes or feel confident in your Python skills, then the Python DeCal might not be the 
            best option for you, as it might be too easy. However, if you would like to explore data 
            analysis skills related to fields such as astronomy, physics, and math, then feel free to 
            join in on the fun.
        </div>
</div>

<div class="faq-container">
    <div class="faq-item">
        <div class="faq-question">How many hours a week will I have to spend on the Python DeCal?</div>
        <div class="faq-answer">Most students spend about 5 hours outside of class a week on homework 
            and other assignments for the Python DeCal. However, some students spend as little as 2 
            and as much as 10; it is very much up to the individual student and their individual 
            experience with coding. Expect a slightly higher workload during the weeks leading up to 
            the Final Project.
        </div>
</div>

<div class="faq-container">
    <div class="faq-item">
        <div class="faq-question">I want to keep learning Python. What class should I take after the Python DeCal?</div>
        <div class="faq-answer">After the Python DeCal, we recommend exploring classes like Data 8, CS 61A, and Physics 
            77 for other introductory coding classes. However, we believe CS 61A contains material beyond what is 
            needed for the astrophysics major at UC Berkeley, but if you are interested in learning more about computer 
            science, feel free to take the class. For more advanced courses, we recommend Data 100, any of the upper-division 
            Astrophysics labs (ASTRON 120, 121, 128), and EPS 109.
        </div>
</div>

---

<style>
    .faq-container {
      max-width: 600px;
      margin: 2rem auto;
      font-family: Arial, sans-serif;
    }

    .faq-item {
      border-bottom: 1px solid #ccc;
      padding: 1rem 0;
    }

    .faq-question {
      cursor: pointer;
      font-weight: bold;
      position: relative;
    }

    .faq-answer {
      display: none;
      margin-top: 0.5rem;
      padding-left: 1rem;
      color: #333;
    }

    .faq-question::after {
      content: "+";
      position: absolute;
      right: 0;
    }

    .faq-question.active::after {
      content: "-";
    }
</style>

<script>
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('active');
      const answer = q.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
</script>