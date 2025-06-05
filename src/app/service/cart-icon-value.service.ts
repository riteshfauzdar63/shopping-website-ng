import { Injectable, OnInit } from '@angular/core';
import { LocalStorageSessionDataService } from './local-storage-session-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartIconValueService implements OnInit{
  
  cartCount : number = 0;

  constructor(private localStorageData : LocalStorageSessionDataService) { }

  ngOnInit(): void {
    this.updateCount();
    // window.addEventListener('localStorage',()=>this.updateCount());
  }

  updateCount(){
    this.cartCount = this.localStorageData.TotalItem;
  }
}
