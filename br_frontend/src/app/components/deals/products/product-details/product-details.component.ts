import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../models/product';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
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
    // Mock data for demonstration
    this.product = new Product(
      '1',
      'Sample Product',
      [
        'assets/images/teddy.jpg',
        'assets/images/teddy.jpg',
        'assets/images/teddy.jpg',
      ],
      5000,
      20,
      'This is a sample product description. It highlights the key features.',
      'Electronics',
      4
    );

    this.stars = Array(this.product.rating).fill(0);
  }
  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half-star logic
    return [...Array(fullStars).fill('star'), ...Array(halfStar).fill('star_half')];
  }
}
