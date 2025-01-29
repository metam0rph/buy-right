import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    // this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.filteredProducts = [...data]; // Using spread operator for new reference
      },
      error: (error: Error) => { // Typed the error parameter
        console.error('Error fetching products:', error);
      }
    });
  }

  onFiltersChanged(filters: any): void {
    if (!this.products?.length) return; // Better check for empty array

    let filtered = [...this.products];

    if (filters?.category) { // Added null check
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters?.sort) { // Added null check
      switch (filters.sort) {
        case 'priceAsc':
          filtered.sort((a, b) => (a.getDiscountedPrice() || 0) - (b.getDiscountedPrice() || 0));
          break;
        case 'priceDesc':
          filtered.sort((a, b) => (b.getDiscountedPrice() || 0) - (a.getDiscountedPrice() || 0));
          break;
        case 'rating':
          filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;
      }
    }

    this.filteredProducts = filtered;
  }
}