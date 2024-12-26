import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  opened: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.WebLandscape])
    .subscribe(result => {
      this.opened = result.matches; // Open sidenav on WebLandscape (larger screens)
    });
  }
  toggleSidenav(): void {
    this.opened = !this.opened;
  }

}
