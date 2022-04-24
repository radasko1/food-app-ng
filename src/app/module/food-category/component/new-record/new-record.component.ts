import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodCategoryFormService } from '../../service/food-category-form.service';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent {
  recordForm: FormGroup;

  constructor(
    private formService: FoodCategoryFormService,
    private formBuilder: FormBuilder
  ) {
    this.recordForm = this.formBuilder.group({
      name: [''],
      price: [0],
    });
  }
}
