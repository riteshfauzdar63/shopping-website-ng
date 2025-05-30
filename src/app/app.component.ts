import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductComponent } from "./component/product/product.component";
// import { LocalStorageSessionDataService } from './service/local-storage-session-data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-website';

  countItem : number = 0;
}
