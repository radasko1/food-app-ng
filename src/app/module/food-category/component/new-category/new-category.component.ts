import { Component } from '@angular/core';
import { FoodCategoryFormService } from '../../service/food-category-form.service';

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
  constructor(private formService: FoodCategoryFormService) {
    this.categoryId = this.formService.getCategoryId();
    console.log(this.categoryId);
  }
}
