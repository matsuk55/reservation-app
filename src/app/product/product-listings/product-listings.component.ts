import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = [
    {
      image: "./assets/img/placeholder-image-800x600.png",
      description: "1 Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      image: "./assets/img/placeholder-image-800x600.png",
      description: "2 Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      image: "./assets/img/placeholder-image-800x600.png",
      description: "3 Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      image: "./assets/img/placeholder-image-800x600.png",
      description: "4 Some quick example text to build on the card title and make up the bulk of the card's content."
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
