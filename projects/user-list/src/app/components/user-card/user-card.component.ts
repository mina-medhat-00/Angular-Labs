import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styles: ``,
})
export class UserCardComponent {
  @Input() user!: {
    avatar: string;
    username: string;
    email: string;
    phone: string;
    verified: boolean;
  };
}
