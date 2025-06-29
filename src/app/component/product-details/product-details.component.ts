import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductDataService } from '../../service/get-product-data.service';
import { CommonModule } from '@angular/common';
import { LocalStorageSessionDataService } from '../../service/local-storage-session-data.service';
import { Router } from '@angular/router';
import { CartIconValueService } from '../../service/cart-icon-value.service';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  // cartCount: number = 0;
  productQuantity: number = 1;

  constructor(private activeRoute: ActivatedRoute,
    private productDataservice: GetProductDataService,
    private localStorageData: LocalStorageSessionDataService,
    private cartIconval : CartIconValueService,
    private router : Router
  ) { }

  ngOnInit(): void {
    const ID = Number(this.activeRoute.snapshot.paramMap.get('id'));
    console.log(ID);
    this.productDataservice.getProductById(ID).subscribe(data => {
      this.product = data;
    });
  }

  saveUser(Product: any): void {
    if(this.localStorageData.getProductFromSession(this.product.id)){
      this.product.quantity += 1;
      alert('item already exist');
    }
    else{
       this.localStorageData.saveProductToSession(Product);
    alert(`User ${Product.id} saved to sessionStorage.`);
    }
   
    // this.cartCount = this.cartCount + 1;
  }

  addTocart(product: any): void {
    this.product.quantity = this.productQuantity;
    this.saveUser(product);
    this.cartIconval.ngOnInit();
    console.log(product);
  }

 

  goToBack(){
    this.router.navigate(['/']);
  }

  goTocheckOut(){
    this.router.navigate(['/checkoutForm']);
  }

}
