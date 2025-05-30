import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetProductDataService } from '../../service/get-product-data.service';
import { Product } from '../../product.model';
import { LocalStorageSessionDataService } from '../../service/local-storage-session-data.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent implements OnInit{

   productList : Product[] = [];
  itemCount : number = 0;

  // @ViewChild('addBtn')AddElement! : ElementRef<HTMLButtonElement>
  // @ViewChild('subBtn')SubtElement! : ElementRef<HTMLButtonElement>

  


  constructor(private productData : GetProductDataService, private localStorageData : LocalStorageSessionDataService) { }

   ngOnInit(): void {
    this.getproduct();
    
  }

   getproduct(){
    this.productData.getproductdata().subscribe(
     {
      next :  (res : any)=>{
        this.productList = res;

        console.log(res);
        },
        error : (err : Error) =>{
          console.warn(err);
        },
     })
    }

    saveDataInLocalStorage(product:any): void{
      this.saveUser(product);
      console.log(product);
    }
     saveUser(Product: any): void {
    this.localStorageData.saveProductToSession(Product);
    alert(`User ${Product.id} saved to sessionStorage.`);
    }

    

    
    
    
    
}

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   }