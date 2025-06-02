import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductComponent } from './component/product/product.component';

export const routes: Routes = [
    {   path : '',
        redirectTo: '/product' ,
        pathMatch: 'full'
     },

     {
        path: 'product',
        component: ProductComponent,
        children : [
            {
        path: 'detail/:id',
        component: ProductDetailsComponent,
        pathMatch: 'full'   
        }
        ]
     },
    
];
