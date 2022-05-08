import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../../../../shared/service/product.service';
import { Product } from '../../../../shared/model/product.interface';
import { Market } from '../../../../shared/model/market.interface';
import { MarketApiService } from '../../../../shared/service/market-api.service';
import { ProductRecordService } from '../../../../shared/service/product-record.service';
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
  products$ = new Observable<Product[]>();
  markets$ = new Observable<Market[]>();
  subs: Subscription = new Subscription();
  translation = translation;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private marketApiService: MarketApiService,
    private productApiService: ProductRecordService,
    private messageService: MessageService
  ) {
    // set form default values
    this.recordForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [null, Validators.required],
      date: [null, Validators.required],
      productId: ['', Validators.required],
      marketId: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.products$ = this.productService.get();
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
          summary: translation.addSuccess,
          life: 2200,
        });
        this.recordForm.reset();
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
