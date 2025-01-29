import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = '/api/products';
  constructor(private http: HttpClient ){
  }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}?page=0&size=6`);
  }
  getProductDetails():Product {
    return new Product('1','Stylish Headphones',['assets/images/teddy.jpg'],3000,10,'Stylish Headphones',"Music",2.5);
  }
}
