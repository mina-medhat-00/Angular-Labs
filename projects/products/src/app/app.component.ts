import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <main style="min-height: 100vh;">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: ``,
})
export class AppComponent {}
