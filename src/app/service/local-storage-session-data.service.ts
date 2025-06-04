import { Injectable } from '@angular/core';
import { Product } from '../product.model';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageSessionDataService {

   saveProductToSession(product: Product): void {
    localStorage.setItem(`${product.id}`, JSON.stringify(product));
  }

   TotalItem = localStorage.length;

  // Retrieve user by ID
  getProductFromSession(productId: string) {
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
}

  // // Optionally: remove a user
  // removeUserFromSession(userId: string): void {
  //   sessionStorage.removeItem(`user_${userId}`);
  // }

  // Total product in local storage
  
}
