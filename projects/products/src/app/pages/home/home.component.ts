import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ProductsService } from "../../services/products.service";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { Product } from "../../types/types";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductCardComponent],
  templateUrl: "./home.component.html",
  styles: ``,
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((response: any) => {
      this.products = response.products;
    });
  }

  handleAddToCart(product: Product) {
    this.productsService.addToCart(product);
  }
}
