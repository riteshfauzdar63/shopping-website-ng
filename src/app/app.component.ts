import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductComponent } from "./component/product/product.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-website';

  countItem : number = 0;

  addToCartbtn(){
    this.countItem = this.countItem + 1;
    console.log(this.countItem);
  }
}
