import { Component, OnInit } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = products;

  constructor() {}

  ngOnInit(): void {}

  share(product: Product) {
    console.log(`${product.name} has been shared!`);
    const telegramShareUrl = `https://t.me/share/url?url=${product.amazonLinkUrl}&text=${product.name}`;
    window.location.href = telegramShareUrl;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
