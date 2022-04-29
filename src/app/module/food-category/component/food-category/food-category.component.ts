import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FoodCategory } from '../../model/food-category.interface';
import { FoodCategoryFormService } from '../../service/food-category-form.service';
import translation from './translation.json';
import { CategoryApiService } from '../../../../shared/service/category-api.service';

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
  categories$: Observable<FoodCategory[]> = new Observable<FoodCategory[]>();
  translation = translation;

  constructor(
    private formService: FoodCategoryFormService,
    private categoryApiService: CategoryApiService
  ) {}

  ngOnInit(): void {
    // set category to null, because in the root category is not possible create food records
    this.formService.setCategoryId(null);
    this.categories$ = this.categoryApiService.get();
  }
}
