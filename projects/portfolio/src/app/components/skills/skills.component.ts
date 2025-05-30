import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  template: `<section class="py-5" id="skills">
    <div class="container">
      <h2 class="mb-4 text-center">Skills</h2>

      <div class="mb-3">
        <div class="d-flex justify-content-between mb-1">
          <span>Angular</span>
          <span>85%</span>
        </div>
        <div class="progress" style="height: 20px">
          <div
            class="progress-bar bg-info"
            role="progressbar"
            style="width: 85%"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div class="mb-3">
        <div class="d-flex justify-content-between mb-1">
          <span>TypeScript</span>
          <span>80%</span>
        </div>
        <div class="progress" style="height: 20px">
          <div
            class="progress-bar bg-secondary"
            role="progressbar"
            style="width: 80%"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div class="mb-3">
        <div class="d-flex justify-content-between mb-1">
          <span>JavaScript</span>
          <span>90%</span>
        </div>
        <div class="progress" style="height: 20px">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 90%"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div class="mb-3">
        <div class="d-flex justify-content-between mb-1">
          <span>HTML &amp; CSS</span>
          <span>95%</span>
        </div>
        <div class="progress" style="height: 20px">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 95%"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div class="mb-3">
        <div class="d-flex justify-content-between mb-1">
          <span>Bootstrap</span>
          <span>75%</span>
        </div>
        <div class="progress" style="height: 20px">
          <div
            class="progress-bar bg-danger"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </section> `,
  styles: ``,
})
export class SkillsComponent {}
