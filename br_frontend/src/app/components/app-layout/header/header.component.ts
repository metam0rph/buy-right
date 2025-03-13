import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  opened: boolean = false;
  favoriteCount: number = 0;
  cartCount: number = 0;
  isLoggedIn: boolean = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private cartService: CartService, private authService: AuthService, private router: Router
  ) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.WebLandscape])
      .subscribe(result => {
        this.opened = result.matches;
      });

    // Subscribe to the service to get updated values
    this.cartService.favoriteCount$.subscribe(count => this.favoriteCount = count);
    this.cartService.cartCount$.subscribe(count => this.cartCount = count);
  }

  logout() {
    this.authService.logout();
    window.location.href = "http://localhost:4200/login";
  }
  toggleSidenav(): void {
    this.opened = !this.opened;
  }
}