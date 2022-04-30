import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import translation from './translation.json';
import { FoodCategory } from '../../model/food-category.interface';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent {
  categoryForm: FormGroup;
  // should not be static values, change it later
  categoryList: FoodCategory[] = [
    { id: 'eufg-8452', name: 'Pecivo' },
    { id: 'oofe-1120', name: 'Mleko' },
    { id: 'amsp-9503', name: 'Ovoce' },
  ];
  translation = translation;

  constructor(private formBuilder: FormBuilder) {
    // set default form values
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      parent: ['', Validators.required], // parent category
    });
  }

  onSubmit() {
    console.log('submit', this.categoryForm);
  }
}
