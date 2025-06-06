import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "user-card",
  standalone: true,
  imports: [CommonModule],
  template: `<div
    class="card text-center shadow-sm mb-3 p-3"
    style="width: 18rem"
  >
    <img
      [src]="user.avatar"
      alt="Avatar"
      class="card-img-top rounded-circle mx-auto mt-2"
      style="width: 100px; height: 100px; object-fit: cover"
    />
    <div class="card-body">
      <h5 class="card-title mb-1">{{ user.username }}</h5>
      <p class="card-text mb-2 text-muted">{{ user.email }}</p>
      <div class="d-inline-flex align-items-center text-muted mb-2">
        Verified
        <i
          *ngIf="user.verified"
          class="fas fa-check text-success ms-2 fs-5"
          aria-hidden="true"
          title="Verified"
        ></i>
        <i
          *ngIf="!user.verified"
          class="fas fa-times text-danger ms-2 fs-5"
          aria-hidden="true"
          title="Not Verified"
        ></i>
      </div>
    </div>
  </div>`,
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
