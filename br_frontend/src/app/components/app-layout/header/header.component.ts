import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  opened: boolean = true;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Close the sidenav for mobile devices
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.opened = !result.matches; // Close if on mobile
    });
  }
  toggleSidenav(): void {
    this.opened = !this.opened;
  }

}
