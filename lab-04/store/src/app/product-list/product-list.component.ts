import { Component, OnInit } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  private products: Product[] = products;

  constructor() {}

  ngOnInit(): void {}

  share() {
    window.alert('The product has been shared!');
  }
}
