import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetProductDataService } from '../../service/get-product-data.service';
import { Product } from '../../product.model';
import { LocalStorageSessionDataService } from '../../service/local-storage-session-data.service';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-product',
  imports: [CommonModule,MatSelectModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent implements OnInit{

   productList : Product[] = [];
   filterProductList : Product[] = [];
   sortOption: string = '';
   selectedCategory : string = '';
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
        this.filterProductList = res;
        },
        error : (err : Error) =>{
          console.warn(err);
        },
     })
    }

    onSortChange() {
  if (this.sortOption === 'highToLow') {
    this.filterProductList.sort((a, b) => b.price - a.price);
  } else if (this.sortOption === 'lowToHigh') {
    this.filterProductList.sort((a, b) => a.price - b.price);
  }
 
}

  filterbyCategory(){
    if(this.selectedCategory){
      this.filterProductList = this.productList.filter(product =>{
        return product.category.toLowerCase() === this.selectedCategory.toLowerCase()
      });
    }
    else{
      this.filterProductList = this.productList;
    }
  }
  // toResetChange(){
  //   this.sortOption = '';
  // }

    saveDataInLocalStorage(product:any): void{
      this.saveUser(product);
      console.log(product);
    }
     saveUser(Product: any): void {
    this.localStorageData.saveProductToSession(Product);
    alert(`User ${Product.id} saved to sessionStorage.`);
    }

    

    
    
    
    
}
