import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductDataService } from '../../service/get-product-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{

  product : any;

  constructor( private route : ActivatedRoute,
              private productDataservice : GetProductDataService
  ){ }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productDataservice.getProductById(id).subscribe(res =>{
      this.product = res;
    });
  }

  

}
