import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "product-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-card.component.html",
  styles: ``,
})
export class ProductCardComponent {
  @Input() product!: {
    id: number;
    imageURL: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    stock: number;
  };
}
