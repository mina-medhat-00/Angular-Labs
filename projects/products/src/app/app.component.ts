import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent],
  template: `<main class="main">
    <app-navbar />
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  </main> `,
  styles: ``,
})
export class AppComponent {}
