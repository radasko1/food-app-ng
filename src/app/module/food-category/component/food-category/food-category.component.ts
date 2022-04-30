import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FoodCategory } from '../../model/food-category.interface';
import translation from './food-category.translation.json';
import { CategoryApiService } from '../../../../shared/service/category-api.service';

/**
 * List of all available categories.
 */
@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.scss'],
})
export class FoodCategoryComponent implements OnInit {
  categories$: Observable<FoodCategory[]> = new Observable<FoodCategory[]>();
  translation = translation;

  constructor(private categoryApiService: CategoryApiService) {}

  ngOnInit(): void {
    this.categories$ = this.categoryApiService.get();
  }
}
