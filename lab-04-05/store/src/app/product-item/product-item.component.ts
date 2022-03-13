import { Component, OnInit, Input } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  numOfLikes: number = 0;

  constructor() {}

  ngOnInit(): void {}

  like(product: Product) {
    this.numOfLikes++;
  }
}
