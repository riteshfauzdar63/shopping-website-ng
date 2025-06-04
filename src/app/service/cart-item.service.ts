import { Injectable } from '@angular/core';
import { LocalStorageSessionDataService } from './local-storage-session-data.service';
import { Product } from '../product.model';
@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private localStorageData: LocalStorageSessionDataService) { }

   getCartItems(): Product[] {
    return this.localStorageData.getAllProductsFromSession();
  }
  removeItem(productId: number) {
  this.localStorageData.removeProductFromSession(`${productId}`);
}


}
