import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodCategoryFormService } from '../../service/food-category-form.service';
import { FoodCategory } from '../../model/food-category.interface';
import { Market } from '../../model/food-market.interface';
import translation from './translation.json';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent {
  // set of texts used in template
  translation = translation;
  recordForm: FormGroup;
  // should not be static values, change it later
  categoryList: FoodCategory[] = [
    { id: 'eufg-8452', name: 'Pecivo' },
    { id: 'oofe-1120', name: 'Mleko' },
    { id: 'amsp-9503', name: 'Ovoce' },
  ];
  // should not be static values, change it later
  marketList: Market[] = [
    { id: '1', name: 'Globus' },
    { id: '2', name: 'Lidl' },
  ];

  constructor(
    private formService: FoodCategoryFormService,
    private formBuilder: FormBuilder
  ) {
    // set form default values
    this.recordForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      category: ['', Validators.required], // category id
      market: ['', Validators.required], // market id
    });
  }
}
