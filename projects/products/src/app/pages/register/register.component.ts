import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RegisterUser } from "../../types/forms";

@Component({
  selector: "register",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./register.component.html",
  styles: `
  .form-control{
    outline: #000;
  }
  .form-control:focus {
    box-shadow:none;
    border:1px solid #000
  }`,
})
export class RegisterComponent {
  user: RegisterUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  handleForm(form: NgForm) {}
}
