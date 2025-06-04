import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductComponent } from './component/product/product.component';
import { ProductCartComponent } from './component/product-cart/product-cart.component';

export const routes: Routes = [
    {   path : '',
        redirectTo: 'home' ,
        pathMatch: 'full'
     },

     {
        path: 'home',
        component: ProductComponent,
     },
    {
        path: 'details/:id',
        component : ProductDetailsComponent
    },
    {
        path: 'cart',
        component: ProductCartComponent
    }
];
