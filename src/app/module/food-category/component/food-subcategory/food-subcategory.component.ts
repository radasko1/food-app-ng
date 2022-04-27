import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FoodCategory } from '../../model/food-category.interface';
import { MockCategoryService } from '../../service/mock-category.service';
import { FoodCategoryFormService } from '../../service/food-category-form.service';

@Component({
  selector: 'app-food-subcategory',
  templateUrl: './food-subcategory.component.html',
  styleUrls: ['./food-subcategory.component.scss'],
})
export class FoodSubcategoryComponent implements OnInit, OnDestroy {
  category: Observable<FoodCategory> = of();

  constructor(
    private categoryService: MockCategoryService,
    private formService: FoodCategoryFormService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.category = this.categoryService.category;

    if (!this.route.snapshot.params) {
      return;
    }
    this.formService.setCategoryId(this.route.snapshot.params.id);
  }

  ngOnDestroy() {}
}
