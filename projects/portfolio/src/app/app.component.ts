import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  template: `<main>
    <app-hero />
    <app-about />
    <app-skills />
    <app-projects />
    <app-footer />
  </main> `,
  styles: ``,
})
export class AppComponent {}
