import { Component } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent {
  products = [
    {
      name: 'Stylish Headphones',
      image: 'https://via.placeholder.com/300',
      originalPrice: 2000,
      discountedPrice: 1500,
      discountPercentage: 25,
      category: "electronics",
      rating: 4.5,
    },
    {
      name: 'Wireless Mouse',
      image: 'https://via.placeholder.com/300',
      originalPrice: 1000,
      discountedPrice: 750,
      discountPercentage: 25,
      category: "electronics",
      rating: 4,
    },
    {
      name: 'Smartphone',
      image: 'https://via.placeholder.com/300',
      originalPrice: 15000,
      discountedPrice: 12000,
      discountPercentage: 20,
      category: "electronics",
      rating: 4.8,
    },
    // Add more products as needed
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
          filtered.sort((a, b) => a.discountPercentage - b.discountPercentage);
          break;
        case 'priceDesc':
          filtered.sort((a, b) => b.discountPercentage - a.discountPercentage);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
      }
    }

    this.filteredProducts = filtered;
  }
}
