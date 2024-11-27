import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {
  @Input() products: any[] = [];
  @Input() filteredProducts: any[] = [];
}
