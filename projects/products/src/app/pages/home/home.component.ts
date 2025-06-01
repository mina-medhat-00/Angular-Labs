import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductCardComponent],
  templateUrl: "./home.component.html",
  styles: ``,
})
export class HomeComponent {
  products: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any[]>("assets/data/products.json").subscribe((data) => {
      this.products = data;
    });
  }
}
