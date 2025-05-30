import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `<section class="py-5 bg-light">
    <div class="container">
      <h2 class="mb-4 text-center">Projects</h2>

      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img
              src="assets/project1.jpg"
              class="card-img-top"
              alt="Project 1"
            />
            <div class="card-body">
              <h5 class="card-title">Chat App</h5>
              <p class="card-text">
                A web app built with Angular and Bootstrap.
              </p>
              <a href="#" target="_blank" class="btn btn-primary">
                <i class="fab fa-github me-2"></i>View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img
              src="assets/project2.jpg"
              class="card-img-top"
              alt="Project 2"
            />
            <div class="card-body">
              <h5 class="card-title">Portfolio</h5>
              <p class="card-text">
                A responsive portfolio site designed using Bootstrap.
              </p>
              <a href="#" target="_blank" class="btn btn-primary">
                <i class="fab fa-github me-2"></i>View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img
              src="assets/project3.jpg"
              class="card-img-top"
              alt="Project 3"
            />
            <div class="card-body">
              <h5 class="card-title">VaniFit</h5>
              <p class="card-text">
                An e-commerce site with Angular and Firebase backend.
              </p>
              <a href="#" target="_blank" class="btn btn-primary">
                <i class="fab fa-github me-2"></i>View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> `,
  styles: ``,
})
export class ProjectsComponent {}
