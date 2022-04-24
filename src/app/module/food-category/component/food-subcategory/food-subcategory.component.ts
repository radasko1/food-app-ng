import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { FoodCategory } from '../../model/food-category.interface';
import { MockCategoryService } from '../../service/mock-category.service';
import { FoodCategoryFormService } from '../../service/food-category-form.service';

@Component({
  selector: 'app-food-subcategory',
  templateUrl: './food-subcategory.component.html',
  styleUrls: ['./food-subcategory.component.scss'],
})
export class FoodSubcategoryComponent implements OnInit, OnDestroy {
  subscription: Subscription | null = null;
  category: Observable<FoodCategory> = of();

  constructor(
    private categoryService: MockCategoryService,
    private formService: FoodCategoryFormService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((p) => {
      this.category = this.categoryService.category;

      if (!p) {
        return;
      }

      this.formService.setCategoryId(p.id);
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
