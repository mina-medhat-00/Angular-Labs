import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { CartComponent } from "./pages/cart/cart.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home Page",
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Login Page",
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Register Page",
  },
  {
    path: "cart",
    component: CartComponent,
    title: "Cart Page",
  },
];
