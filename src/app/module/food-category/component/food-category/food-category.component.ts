import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FoodCategory } from '../../model/food-category.interface';
import { MockCategoryService } from '../../service/mock-category.service';

/**
 * Root page food category displaying only first level categories.
 * Subcategories each category are visible in category detail further.
 */
@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
})
export class FoodCategoryComponent implements OnInit {
  categoryList: Observable<FoodCategory[]> = of([]);

  constructor(private categoryService: MockCategoryService) {}

  ngOnInit(): void {
    this.categoryList = this.categoryService.categoryList;
  }
}
