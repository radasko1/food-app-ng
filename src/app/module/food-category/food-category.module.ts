import { NgModule } from '@angular/core';
import { FoodCategoryComponent } from './component/food-category/food-category.component';
import { FoodCategoryRoutingModule } from './food-category-routing.module';

@NgModule({
  declarations: [FoodCategoryComponent],
  imports: [FoodCategoryRoutingModule],
  exports: [FoodCategoryComponent],
})
export class FoodCategoryModule {}
