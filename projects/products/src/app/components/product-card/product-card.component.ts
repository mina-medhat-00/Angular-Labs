import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsService } from "../../services/products.service";
import { Product } from "../../types/types";

@Component({
  selector: "product-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-card.component.html",
  styles: ``,
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  constructor(private productsService: ProductsService) {}

  handleClick() {
    this.productsService
      .getProductById(this.product.id)
      .subscribe((response) => {
        this.productsService.addToCart(response);
      });
  }
}
