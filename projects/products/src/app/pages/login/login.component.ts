import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";
import { LoginUser } from "../../types/forms";

@Component({
  selector: "login",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login.component.html",
  styles: `
  .form-control{
    outline: #000;
  }
  .form-control:focus {
    box-shadow:none;
    border:1px solid #000
  }`,
})
export class LoginComponent {
  user: LoginUser = {
    email: "",
    password: "",
  };
  handleForm(form: NgForm) {}
}
