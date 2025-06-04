import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsService } from "../../services/products.service";
import { Product } from "../../types/types";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./cart.component.html",
  styles: ``,
})
export class CartComponent {
  cart: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getCart().subscribe((cart) => {
      this.cart = cart;
    });
  }
}
