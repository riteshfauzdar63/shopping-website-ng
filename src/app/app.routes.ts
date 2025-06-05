import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductComponent } from './component/product/product.component';
import { ProductCartComponent } from './component/product-cart/product-cart.component';
import { FormPageComponent } from './component/form-page/form-page.component';

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
    },
    {
        path: 'checkoutForm',
        component: FormPageComponent
    }
];
