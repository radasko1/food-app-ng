import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FoodCategory } from '../../model/food-category.interface';
import { MockCategoryService } from '../../service/mock-category.service';
import { FoodCategoryFormService } from '../../service/food-category-form.service';
import translation from './translation.json';

/**
 * Root page food category displaying only first level categories.
 * Subcategories each category are visible in category detail further.
 */
@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.scss'],
})
export class FoodCategoryComponent implements OnInit {
  categoryList: Observable<FoodCategory[]> = new Observable<FoodCategory[]>();
  translation = translation;

  constructor(
    private categoryService: MockCategoryService,
    private formService: FoodCategoryFormService
  ) {}

  ngOnInit(): void {
    this.categoryList = this.categoryService.categoryList;
    this.formService.setCategoryId(null);
  }
}
