import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCategoryComponent } from './component/food-category/food-category.component';
import { FoodSubcategoryComponent } from './component/food-subcategory/food-subcategory.component';
import { FoodCategoryRoutingModule } from './food-category-routing.module';
import { MockCategoryService } from './service/mock-category.service';
import { PrimeNGModule } from 'src/app/shared/module/prime-ng/primeng.module';
import { SharedModule } from "../../shared/module/shared-module/shared.module";

/**
 * List of components available in the module.
 * Grouped in one to save time and better readability.
 * @constant
 */
const moduleComponents = [FoodCategoryComponent, FoodSubcategoryComponent];

@NgModule({
  declarations: moduleComponents,
  exports: moduleComponents,
  imports: [CommonModule, PrimeNGModule, FoodCategoryRoutingModule, SharedModule],
  providers: [MockCategoryService],
})
export class FoodCategoryModule {
}
