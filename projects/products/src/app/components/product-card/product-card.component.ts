import { Component, input, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
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
}
