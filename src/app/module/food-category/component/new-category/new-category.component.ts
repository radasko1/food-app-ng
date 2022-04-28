import { Component } from '@angular/core';
import { FoodCategoryFormService } from '../../service/food-category-form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import translation from './translation.json';
import { FoodCategory } from '../../model/food-category.interface';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent {
  /**
   * New Record component is available only for subcategories, therefore it needs category id to know
   * where new record/product will be located.
   * New category is available in root category and also in subcategory, which makes problem, how to
   * divide from each other to know where the new category should be located.
   * With this is associated the url path of creating form.
   */
  categoryId: string | null;
  categoryForm: FormGroup;
  // should not be static values, change it later
  categoryList: FoodCategory[] = [
    { id: 'eufg-8452', name: 'Pecivo' },
    { id: 'oofe-1120', name: 'Mleko' },
    { id: 'amsp-9503', name: 'Ovoce' },
  ];
  translation = translation;

  constructor(
    private formService: FoodCategoryFormService,
    private formBuilder: FormBuilder
  ) {
    this.categoryId = this.formService.getCategoryId();

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
