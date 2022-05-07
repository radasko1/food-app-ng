import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CategoryApiService } from '../../../../shared/service/category-api.service';
import { FoodCategory } from '../../../../shared/model/food-category.interface';
import { Market } from '../../../../shared/model/market.interface';
import { MarketApiService } from '../../../../shared/service/market-api.service';
import { ProductApiService } from '../../../../shared/service/product-api.service';
import translation from './new-record.translation.json';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
  providers: [MessageService],
})
export class NewRecordComponent implements OnInit, OnDestroy {
  recordForm: FormGroup;
  categories$ = new Observable<FoodCategory[]>();
  markets$ = new Observable<Market[]>();
  subs: Subscription = new Subscription();
  translation = translation;

  constructor(
    private formBuilder: FormBuilder,
    private categoryApiService: CategoryApiService,
    private marketApiService: MarketApiService,
    private productApiService: ProductApiService,
    private messageService: MessageService
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

    this.subs = this.productApiService
      .create(this.recordForm.value)
      .subscribe((n) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Položka byla přidána.',
          life: 2200,
        });
        this.recordForm.reset();
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
