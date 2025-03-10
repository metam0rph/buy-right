import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent{
  
  @Input() product!: Product;
  @Output() addToWishlist = new EventEmitter<Product>();

  constructor (private router: Router, private cartService: CartService){
    
  }
  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  buyNow(event: Event): void {
    event.stopPropagation();
  }

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.cartService.addToFavorites();
  }

  addToCart(event: Event): void {
    event.stopPropagation();
    this.cartService.addToCart();
  }

  navigateToDetails() {
    this.router.navigate(['/products'], { queryParams: this.product});
  }
}
