import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  opened: boolean = false;
  favoriteCount: number = 0;
  cartCount: number = 0;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.WebLandscape])
      .subscribe(result => {
        this.opened = result.matches;
      });

    // Subscribe to the service to get updated values
    this.cartService.favoriteCount$.subscribe(count => this.favoriteCount = count);
    this.cartService.cartCount$.subscribe(count => this.cartCount = count);
  }

  toggleSidenav(): void {
    this.opened = !this.opened;
  }
}