import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  @Input() products: Product[] = [];
  @Input() filteredProducts: Product[] = [];

  ngOnInit(): void {
    console.log(this.filteredProducts);
  }
}