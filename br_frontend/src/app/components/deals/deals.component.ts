import { Component } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent {
  products:Product[] = [
    new Product('1','Stylish Headphones','ssets/images/flower.jpg',2000,10,'Stylish Headphones',"electronics",4.5),
    new Product('1','Stylish Headphones','ssets/images/flower.jpg',1000,10,'Stylish Headphones',"toys",4.5),
    new Product('1','Stylish Headphones','ssets/images/flower.jpg',3000,10,'Stylish Headphones',"music",2.5),
    new Product('1','Stylish Headphones','ssets/images/flower.jpg',3000,10,'Stylish Headphones',"music",2.5),
    new Product('1','Stylish Headphones','ssets/images/flower.jpg',3000,10,'Stylish Headphones',"music",2.5),
    new Product('1','Stylish Headphones','ssets/images/flower.jpg',3000,10,'Stylish Headphones',"music",2.5)
  ];

  filteredProducts = [...this.products];

  onFiltersChanged(filters: any): void {
    let filtered = [...this.products];

    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.sort) {
      switch (filters.sort) {
        case 'priceAsc':
          filtered.sort((a, b) => a.getDiscountedPrice() - b.getDiscountedPrice());
          break;
        case 'priceDesc':
          filtered.sort((a, b) => b.getDiscountedPrice() - a.getDiscountedPrice());
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
      }
    }

    this.filteredProducts = filtered;
  }
}
