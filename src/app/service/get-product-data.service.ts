import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductDataService {

  url = "https://fakestoreapi.com/products";

  constructor(private http : HttpClient) { }

  getproductdata() : Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
   }

   getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
  
}
