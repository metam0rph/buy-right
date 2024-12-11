import { Component, Input } from '@angular/core';
import { Product } from '../../../models/products';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {

  @Input() product!: Product;

  get stars() {
    const fullStars = Math.floor(this.product.rating);
    const emptyStars = 5 - fullStars;
    return new Array(fullStars).fill('full').concat(new Array(emptyStars).fill('empty'));
  }
}
