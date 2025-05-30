import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageSessionDataService {

   saveProductToSession(Product: any): void {
    localStorage.setItem(`${Product.id}`, JSON.stringify(Product));
  }

  

  //  TotalItem = localStorage.length;

  // // Retrieve user by ID
  // getUserFromSession(productId: string): any | null {
  //   const data = sessionStorage.getItem(`user_${productId}`);
  //   return data ? JSON.parse(data) : null;
  // }

  // // Optionally: remove a user
  // removeUserFromSession(userId: string): void {
  //   sessionStorage.removeItem(`user_${userId}`);
  // }

  // Total product in local storage
  
}
