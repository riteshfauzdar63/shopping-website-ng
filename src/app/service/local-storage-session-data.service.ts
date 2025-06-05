import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageSessionDataService {

   private cartCountSubject = new BehaviorSubject<number>(0);
    cartCount$ = this.cartCountSubject.asObservable();

      constructor() {
    this.updateCartCount();
  }



   TotalItem = localStorage.length;
   saveProductToSession(product: Product): void {
    localStorage.setItem(`${product.id}`, JSON.stringify(product));
    this.updateCartCount();
  }

  

  // Retrieve user by ID
  getProductFromSession(productId: string) {
    this.updateCartCount();
  const data = localStorage.getItem(`${productId}`);
  return data ? JSON.parse(data) : null;
}

  getAllProductsFromSession(): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) {
      try {
        const item = localStorage.getItem(key);
        if (item) {
          const parsed: Product = JSON.parse(item);
          // Optionally check if it's a valid product
          if (parsed && parsed.id) {
            products.push(parsed);
          }
        }
      } catch (err) {
        // Skip invalid JSON
        continue;
      }
    }
  }

  return products;
}
  removeProductFromSession(productId: string): void {
  localStorage.removeItem(`${productId}`);
  this.updateCartCount();
}

   private updateCartCount(): void {
    // Count only product keys (assuming all keys are product IDs)
    const count = this.getAllProductsFromSession().length;
    this.cartCountSubject.next(count);
  }
}
