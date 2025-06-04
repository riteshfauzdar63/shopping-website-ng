import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LocalStorageSessionDataService } from './service/local-storage-session-data.service';
import { CommonModule } from '@angular/common';

// import { LocalStorageSessionDataService } from './service/local-storage-session-data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'shopping-website';

  cartCount = 0;

  constructor(private localStorageData : LocalStorageSessionDataService){
   
  }

  ngOnInit(): void {
    this.updateCount();
    window.addEventListener('localStorage',()=>this.updateCount());
  }

  updateCount(){
    this.cartCount = this.localStorageData.TotalItem;
  }

}
