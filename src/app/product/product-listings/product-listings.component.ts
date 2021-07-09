import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;
  
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productObserbable = this.productService.getProducts();
    productObserbable.subscribe(
      (data) => { 
        this.products = data
      },
      (err) => { console.log('error data')}
    );
  }

}
