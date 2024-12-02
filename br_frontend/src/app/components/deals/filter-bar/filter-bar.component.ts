import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {

  @Output() filtersChanged = new EventEmitter<any>();

  categories: string[] = ['Electronics', 'Clothing', 'Books', 'Appliances'];
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
