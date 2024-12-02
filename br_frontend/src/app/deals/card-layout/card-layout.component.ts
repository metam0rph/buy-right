import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {
  
  @Input() products: any[] = [];
  @Input() filteredProducts: any[] = [];
  product = {
    name: 'Stylish Headphones',
    image: 'assets/images/flower.jpg', // Replace with product image URL
    originalPrice: 2000,
    discountedPrice: 1500,
    discountPercentage: 25,
    rating: 4.5,
  };

  get stars() {
    const fullStars = Math.floor(this.product.rating);
    const emptyStars = 5 - fullStars;
    return new Array(fullStars).fill('full').concat(new Array(emptyStars).fill('empty'));
  }
}
