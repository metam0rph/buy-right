import { Component } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent {
  products = [
    { name: 'Smartphone', category: 'Electronics', price: 15000, rating: 4.5 },
    { name: 'Jeans', category: 'Clothing', price: 1200, rating: 4.0 },
    { name: 'Microwave', category: 'Appliances', price: 5000, rating: 4.8 },
    { name: 'Novel', category: 'Books', price: 300, rating: 4.2 },
  ];

  filteredProducts = [...this.products];

  onFiltersChanged(filters: any): void {
    let filtered = [...this.products];

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    // Sort by selected option
    if (filters.sort) {
      switch (filters.sort) {
        case 'priceAsc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'priceDesc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
      }
    }

    this.filteredProducts = filtered;
  }
}
