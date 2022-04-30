import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import translation from './food-category-detail.translation.json';
import { Observable } from 'rxjs';
import { CategoryApiService } from '../../../../shared/service/category-api.service';
import { FoodCategory } from '../../model/food-category.interface';

/**
 * Detail for Category, where can be found list with records.
 */
@Component({
  selector: 'app-food-category-detail',
  templateUrl: './food-category-detail.component.html',
  styleUrls: ['./food-category-detail.component.scss'],
})
export class FoodCategoryDetailComponent implements OnInit, OnDestroy {
  category$ = new Observable<FoodCategory>();
  translation = translation;

  constructor(
    private categoryApiService: CategoryApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.route.snapshot.params) {
      return;
    }

    // cache this response from category list page
    this.category$ = this.categoryApiService.getOne(
      this.route.snapshot.params.id
    );
  }

  ngOnDestroy() {}
}
