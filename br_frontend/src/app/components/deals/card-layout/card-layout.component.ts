import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {
  
  @Input() product!: Product;
  @Output() addToWishlist = new EventEmitter<Product>();

  constructor (private router: Router){}
  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  buyNow(event: Event): void {
    event.stopPropagation(); // Prevents the card click event from firing
    // Implement buy now logic
  }

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    // Implement favorite toggle logic
  }

  addToCart(event: Event): void {
    event.stopPropagation();
    // Implement add to cart logic
  }

  navigateToDetails() {
    this.router.navigate(['/products', this.product.id]);
  }
}
