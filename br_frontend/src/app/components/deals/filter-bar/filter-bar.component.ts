import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {
  constructor(categorieService:CategoryService){
    this.categories = categorieService.getCategories();
  }
  @Output() filtersChanged = new EventEmitter<any>();

  categories: string[];
  selectedCategory: string | null = null;
  sortBy: string | null = null;

  onFilterChange(): void {
    this.filtersChanged.emit({
      category: this.selectedCategory,
      sort: this.sortBy,
    });
  }

  clearFilters(): void {
    this.selectedCategory = null;
    this.sortBy = null;
    this.filtersChanged.emit({
      category: null,
      sort: null,
    });
  }
}
