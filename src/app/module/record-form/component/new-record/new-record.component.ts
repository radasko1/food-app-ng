import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryApiService } from '../../../../shared/service/category-api.service';
import { FoodCategory } from '../../../../shared/model/food-category.interface';
import { Market } from '../../../../shared/model/market.interface';
import { MarketApiService } from '../../../../shared/service/market-api.service';
import { ProductApiService } from '../../../../shared/service/product-api.service';
import translation from './new-record.translation.json';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit {
  recordForm: FormGroup;
  categories$ = new Observable<FoodCategory[]>();
  markets$ = new Observable<Market[]>();
  translation = translation;

  constructor(
    private formBuilder: FormBuilder,
    private categoryApiService: CategoryApiService,
    private marketApiService: MarketApiService,
    private productApiService: ProductApiService
  ) {
    // set form default values
    this.recordForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [null, Validators.required],
      date: [null, Validators.required],
      categoryId: ['', Validators.required],
      marketId: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.categories$ = this.categoryApiService.get();
    this.markets$ = this.marketApiService.get();
  }

  /**
   * When record form is submitted.
   */
  onSubmit() {
    // transform "date" into ISO format
    this.recordForm.patchValue({
      date: new Date(this.recordForm.value.date).toISOString(),
    });

    this.productApiService.create(this.recordForm.value).subscribe();
  }
}
