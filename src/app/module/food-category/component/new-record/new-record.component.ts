import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodCategory } from '../../model/food-category.interface';
import { Market } from '../../model/food-market.interface';
import translation from './new-record.translation.json';
import { SelectChange } from '../../model/select-change.interface';

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
  selectList: unknown[] = [
    { id: 'piece', name: 'Kus' },
    { id: 'kg', name: 'Kg' },
  ];
  // should not be static values, change it later
  categoryList: FoodCategory[] = [
    { id: 'eufg-8452', name: 'Pecivo' },
    { id: 'oofe-1120', name: 'Mleko' },
    { id: 'amsp-9503', name: 'Ovoce' },
  ];
  // should not be static values, change it later
  marketList: Market[] = [
    { id: 'market-globus', name: 'Globus' },
    { id: 'market-lidl', name: 'Lidl' },
  ];

  constructor(private formBuilder: FormBuilder) {
    // set form default values
    this.recordForm = this.formBuilder.group({
      // string type
      name: ['', Validators.required],
      // selector with string type
      priceSelect: ['piece', Validators.required],
      // number or null type
      pricePerPiece: [null],
      pricePerKg: [null],
      // selector with string type
      category: ['', Validators.required], // category id
      // selector with string type
      market: ['', Validators.required], // market id
    });
  }

  /**
   * When record form is submitted.
   */
  onSubmit() {
    console.log('submit', this.recordForm);
  }

  /**
   * When option of select is changed.
   * Everytime the select option is change, both price controls are set to null,
   * because the number field is empty and clean to write value.
   * @param event
   */
  onSelectTypeChange(event: SelectChange) {
    this.recordForm.patchValue({
      pricePerKg: null,
      pricePerPiece: null,
    });
  }
}
