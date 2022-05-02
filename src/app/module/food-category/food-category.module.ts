import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCategoryComponent } from './component/food-category/food-category.component';
import { FoodCategoryDetailComponent } from './component/food-category-detail/food-category-detail.component';
import { FoodCategoryRoutingModule } from './food-category-routing.module';
import { SharedModule } from '../../shared/module/shared-module/shared.module';
import { FoodCategoryHeaderPanelComponent } from './component/header-panel/header-panel.component';

/**
 * List of components available in the module.
 * Grouped in one to save time and better readability.
 * @constant
 */
const moduleComponents = [
  FoodCategoryComponent,
  FoodCategoryDetailComponent,
  FoodCategoryHeaderPanelComponent,
];

@NgModule({
  declarations: moduleComponents,
  exports: moduleComponents,
  imports: [CommonModule, FoodCategoryRoutingModule, SharedModule],
})
export class FoodCategoryModule {}
