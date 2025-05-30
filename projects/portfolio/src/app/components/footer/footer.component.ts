import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `<footer class="bg-dark text-white py-5" id="contact">
    <div class="container text-center">
      <h4>Contact Me</h4>
      <p class="mb-3">
        <i class="fas fa-envelope me-2"></i>
        <a href="#" class="text-white text-decoration-underline"
          >mina.medhat&#64;email.com</a
        >
      </p>

      <div class="d-flex justify-content-center gap-4 fs-4">
        <a href="#" target="_blank" class="text-white">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" target="_blank" class="text-white">
          <i class="fab fa-github"></i>
        </a>
        <a href="#" target="_blank" class="text-white">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p class="mt-4 small">&copy; 2025 Mina Medhat. All rights reserved.</p>
    </div>
  </footer> `,
  styles: ``,
})
export class FooterComponent {}
