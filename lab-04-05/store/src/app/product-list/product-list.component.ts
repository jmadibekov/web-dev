import { Component, OnInit } from '@angular/core';
import { Category } from '../categories';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = products;
  Category = Category;
  selectedCategories = new Set();

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

  onToggle(category: string) {
    if (this.selectedCategories.has(category)) {
      this.selectedCategories.delete(category);
    } else {
      this.selectedCategories.add(category);
    }

    this.products = products.filter((product) => {
      let name = product.category.toString();
      name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      return this.selectedCategories.has(name);
    });

    console.log(this.selectedCategories);
    console.log(this.products);
  }
}
