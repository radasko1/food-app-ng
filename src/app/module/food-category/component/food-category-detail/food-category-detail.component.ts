import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import translation from './food-category-detail.translation.json';
import { Observable } from 'rxjs';
import { CategoryApiService } from '../../../../shared/service/category-api.service';
import { FoodCategory } from '../../../../shared/model/food-category.interface';
import { FoodRecord } from '../../../../shared/model/food-record.interface';

/**
 * Detail for Category, where can be found list with records.
 */
@Component({
  selector: 'app-food-category-detail',
  templateUrl: './food-category-detail.component.html',
  styleUrls: ['./food-category-detail.component.scss'],
})
export class FoodCategoryDetailComponent implements OnInit {
  categoryId = '';
  category$ = new Observable<FoodCategory>();
  products$ = new Observable<FoodRecord[]>();
  translation = translation;

  constructor(
    private categoryApiService: CategoryApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.route.snapshot.params) {
      return;
    }

    this.categoryId = this.route.snapshot.params.id;

    // cache this response from category list page
    // TODO: cache product collection?
    // TODO: forkJoin?
    this.category$ = this.categoryApiService.getOne(this.categoryId);
    this.products$ = this.categoryApiService.getProducts(this.categoryId);
  }
}
