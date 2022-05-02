import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import translation from './translation.json';
import { CategoryApiService } from '../../../../shared/service/category-api.service';
import { SelectButtonModel } from '../../../../shared/model/select-button.model';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent {
  categoryForm: FormGroup;
  // should not be static values, change it later
  categoryList: SelectButtonModel[] = [];
  translation = translation;

  constructor(
    private formBuilder: FormBuilder,
    private categoryApiService: CategoryApiService
  ) {
    // set default form values
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      parent: ['', Validators.required], // parent category
    });

    this.categoryApiService.get().subscribe((c) => {
      if (c) {
        // this.categoryList = c;
      }
      console.log(c);
    });
  }

  onSubmit() {
    console.log('submit', this.categoryForm);
  }
}
