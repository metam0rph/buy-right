import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../models/product';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  product!: Product;
  stars: number[] = [];
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 500,
    point: {
      visible: true
    },
    load: 2,
    loop: true
  };
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("Query Params:", params); // Debugging to check params structure
  
      // Ensure params.imageUrl is a string before calling .split(',')
      let imageUrlArray: string[] = [];
      if (typeof params['imageUrl'] === 'string') {
        imageUrlArray = params['imageUrl'].split(',');
      } else if (Array.isArray(params['imageUrl'])) {
        imageUrlArray = params['imageUrl'];
      }
  
      // Initialize product
      this.product = new Product(
        Number(params['id']) || 0,
        params['sku'] || '',
        imageUrlArray,
        params['name'] || 'Unknown',
        params['description'] || '',
        Number(params['stockQuantity']) || 0,
        params['categoryName'] || '',
        Number(params['originalPrice']) || 0,
        Number(params['discountPercentage']) || 0,
        params['category'] || '',
        Number(params['rating']) || 0
      );
  
      // Assign default images if none are provided
      if (this.product.imageUrl.length === 0) {
        this.product.imageUrl = [
          'assets/images/teddy.jpg',
          'assets/images/teddy.jpg',
          'assets/images/teddy.jpg',
        ];
      }
    });
  }
  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half-star logic
    return [...Array(fullStars).fill('star'), ...Array(halfStar).fill('star_half')];
  }
}
