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
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        if (!data || !data.content) {
          console.error('API response does not contain expected data:', data);
          return;
        }
  
        this.products = data.content.map((item: any) => {
          if (!item) return; // Skip invalid items
  
          return new Product(
            item.id ?? 0, // Use fallback values if necessary
            item.sku ?? '',
            Array.isArray(item.imageUrl) ? item.imageUrl : (item.imageUrl ? item.imageUrl.split(',') : []), 
            item.name ?? 'Unknown',
            item.description ?? '',
            item.stockQuantity ?? 0,
            item.categoryName ?? '',
            item.originalPrice ?? 0,
            item.discountPercentage ?? 0,
            item.category ?? '',
            item.rating ?? 0
          );
        }).filter((product: Product | undefined): product is Product => product !== undefined); // Remove undefined values
  
        this.filteredProducts = [...this.products]; // Ensure a new reference
      },
      error: (error: Error) => {
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

    // if (filters?.sort) { // Added null check
    //   switch (filters.sort) {
    //     case 'priceAsc':
    //       filtered.sort((a, b) => (a.getDiscountedPrice() || 0) - (b.getDiscountedPrice() || 0));
    //       break;
    //     case 'priceDesc':
    //       filtered.sort((a, b) => (b.getDiscountedPrice() || 0) - (a.getDiscountedPrice() || 0));
    //       break;
    //     case 'rating':
    //       filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    //       break;
    //   }
    // }

    this.filteredProducts = filtered;
  }
}