import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Product } from "../../types/types";
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductCardComponent],
  templateUrl: "./home.component.html",
  styles: ``,
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://dummyjson.com/products").subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
