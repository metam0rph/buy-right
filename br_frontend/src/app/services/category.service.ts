import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories():string[]{
    return ['Electronics', 'Clothing', 'Books', 'Appliances'];
  }
}
