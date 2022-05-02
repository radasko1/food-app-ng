import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import translation from './translation.json';
import { CategoryApiService } from '../../../../shared/service/category-api.service';
import { FoodCategory } from '../../../../shared/model/food-category.interface';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent {
  categoryForm: FormGroup;
  categoryList: FoodCategory[] = [];
  translation = translation;

  constructor(
    private formBuilder: FormBuilder,
    private categoryApiService: CategoryApiService
  ) {
    // set default form values
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      // parent: ['', Validators.required], // parent category
    });

    this.categoryApiService.get().subscribe((c) => {
      if (c) {
        this.categoryList = c;
      }
    });
  }

  /**
   * Form submit handler
   */
  onSubmit() {
    if (this.categoryForm.status === 'INVALID') {
      return;
    }

    // find out if there is better solution than empty subscribe()
    this.categoryApiService.create(this.categoryForm.value).subscribe();
  }
}
