import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `<section class="py-5 bg-light" id="about">
    <div class="container">
      <h2 class="mb-4 text-center">About Me</h2>
      <p>
        I'm a Web Developer with specialized in building dynamic and responsive
        web applications. With experience in React, Angular, Node.js, TypeScript
        and I'm adept at full-stack development, from implementing scalable APIs
        to perfecting UIs.
      </p>

      <h4 class="mt-4">Education</h4>
      <ul>
        <li>Bachelor of Science in Computer Science - Ain Shams University</li>
      </ul>

      <h4 class="mt-4">Experience</h4>
      <ul>
        <li>Frontend Developer at XYZ (2023 - 2025)</li>
        <li>Intern at ITI (2025 - Present)</li>
      </ul>

      <div class="mt-4 text-center">
        <a href="#" class="btn btn-primary" download>
          <i class="fas fa-download me-2"></i> Download CV
        </a>
      </div>
    </div>
  </section>`,
  styles: ``,
})
export class AboutComponent {}
