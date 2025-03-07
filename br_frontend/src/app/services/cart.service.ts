import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private favoriteCount = new BehaviorSubject<number>(0);
  private cartCount = new BehaviorSubject<number>(0);

  favoriteCount$ = this.favoriteCount.asObservable();
  cartCount$ = this.cartCount.asObservable();

  addToFavorites(): void {
    this.favoriteCount.next(this.favoriteCount.value + 1);
  }

  addToCart(): void {
    this.cartCount.next(this.cartCount.value + 1);
  }
}
