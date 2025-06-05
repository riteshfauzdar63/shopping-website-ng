import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LocalStorageSessionDataService } from './service/local-storage-session-data.service';
import { CommonModule } from '@angular/common';
import { CartIconValueService } from './service/cart-icon-value.service';

// import { LocalStorageSessionDataService } from './service/local-storage-session-data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shopping-website';

  cartItemValue : number = 0;
  constructor(
              private localdataservice : LocalStorageSessionDataService){  
  }

  ngOnInit(): void {
     this.localdataservice.cartCount$.subscribe(count => {
      this.cartItemValue = count;
    });
  }
  

  

  

}
