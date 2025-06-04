import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../types/types";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>("https://dummyjson.com/products");
  }

  getProductById(productId: number) {
    return this.http.get<Product>(
      `https://dummyjson.com/products/${productId}`
    );
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartSubject.next([...this.cart]);
  }

  getCart() {
    return this.cartSubject.asObservable();
  }
}
