import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import translation from './new-record.translation.json';
import { SelectChange } from '../../model/select-change.interface';
import { CategoryApiService } from '../../../../shared/service/category-api.service';
import { SelectButtonModel } from '../../../../shared/model/select-button.model';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit {
  // set of texts used in template
  translation = translation;
  recordForm: FormGroup;
  // should not be static values, change it later
  selectList: SelectButtonModel[] = [
    { id: 'piece', name: 'Kus' },
    { id: 'kg', name: 'Kg' },
  ];
  // should not be static values, change it later
  categoryList: SelectButtonModel[] = [
    { id: 'eufg-8452', name: 'Pecivo' },
    { id: 'oofe-1120', name: 'Mleko' },
    { id: 'amsp-9503', name: 'Ovoce' },
  ];
  // should not be static values, change it later
  marketList: SelectButtonModel[] = [
    { id: 'market-globus', name: 'Globus' },
    { id: 'market-lidl', name: 'Lidl' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private categoryApiService: CategoryApiService
  ) {
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

  ngOnInit() {
    const categories$ = this.categoryApiService.get();
    categories$.subscribe((c) => {
      console.log(c);
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
