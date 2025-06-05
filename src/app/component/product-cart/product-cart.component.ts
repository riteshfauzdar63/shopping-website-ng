import { Component, OnInit } from '@angular/core';
import { LocalStorageSessionDataService } from '../../service/local-storage-session-data.service';
import { CartItemService } from '../../service/cart-item.service';
import { Product } from '../../product.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-cart',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
  standalone : true,
})
export class ProductCartComponent {

  cartItems: Product[] = [];
  totalPrice: number = 0;

constructor(private cartService: CartItemService,
            private router : Router
)

 {}

ngOnInit() {
  this.cartItems = this.cartService.getCartItems();
  this.calculateTotal();
}

deleteItem(productId: number) {
  this.cartService.removeItem(productId); // Delegate to service
  this.cartItems = this.cartService.getCartItems(); // Refresh the list
  this.calculateTotal(); // Recalculate total price
}


calculateTotal() {
  this.totalPrice = this.cartItems.reduce((sum, item) => {
    return Math.round(sum + (item.price * item.quantity));
  }, 0);
}

goToCheckout(){
  this.router.navigate(['/checkoutForm']);
}



}
