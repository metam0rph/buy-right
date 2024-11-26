import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  opened: boolean = true;

  toggleSidenav(): void {
    this.opened = !this.opened;
  }

}
