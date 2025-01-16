import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): Product[] {
    return [
        new Product('1','Stylish Headphones',['assets/images/teddy.jpg'],2000,10,'Stylish Headphones',"Electronics",4.5),
        new Product('1','Stylish Headphones',['assets/images/teddy.jpg'],1000,10,'Stylish Headphones',"Toys",4.5),
        new Product('1','Stylish Headphones',['assets/images/teddy.jpg'],3000,10,'Stylish Headphones',"Music",2.5),
        new Product('1','Stylish Headphones',['assets/images/teddy.jpg'],3000,10,'Stylish Headphones',"Music",2.5),
        new Product('1','Stylish Headphones',['assets/images/teddy.jpg'],3000,10,'Stylish Headphones',"Music",2.5),
        new Product('1','Stylish Headphones',['assets/images/teddy.jpg'],3000,10,'Stylish Headphones',"Music",2.5)
      ];
  }
  getProductDetails():Product{
    return new Product('1','Stylish Headphones',['assets/images/teddy.jpg'],3000,10,'Stylish Headphones',"Music",2.5);
  }
}
