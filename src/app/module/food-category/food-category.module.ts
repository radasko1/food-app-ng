import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FoodCategoryComponent } from './component/food-category/food-category.component';
import { FoodCategoryDetailComponent } from './component/food-category-detail/food-category-detail.component';
import { FoodCategoryRoutingModule } from './food-category-routing.module';
import { SharedModule } from '../../shared/module/shared-module/shared.module';
import { FoodCategoryHeaderPanelComponent } from './component/header-panel/header-panel.component';
import { NewRecordComponent } from './component/new-record/new-record.component';
import { NewCategoryComponent } from './component/new-category/new-category.component';
import { FoodCategoryFormService } from './service/food-category-form.service';

/**
 * List of components available in the module.
 * Grouped in one to save time and better readability.
 * @constant
 */
const moduleComponents = [
  FoodCategoryComponent,
  FoodCategoryDetailComponent,
  FoodCategoryHeaderPanelComponent,
  NewRecordComponent,
  NewCategoryComponent,
];

@NgModule({
  declarations: moduleComponents,
  exports: moduleComponents,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FoodCategoryRoutingModule,
    SharedModule,
  ],
  providers: [FoodCategoryFormService],
})
export class FoodCategoryModule {}
