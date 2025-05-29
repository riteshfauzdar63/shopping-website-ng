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

}
