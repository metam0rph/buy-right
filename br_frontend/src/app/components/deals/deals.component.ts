import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent {
  constructor(productsService:ProductsService ){
    this.products = productsService.getProducts();
    this.filteredProducts = this.products;
  }
  products: Product[];

  filteredProducts: Product[];
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
