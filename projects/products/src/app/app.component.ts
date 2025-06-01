import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent, FooterComponent],
  template: `<main>
    <app-navbar />
    <div>
      <router-outlet></router-outlet>
    </div>
    <app-footer />
  </main> `,
  styles: ``,
})
export class AppComponent {}
