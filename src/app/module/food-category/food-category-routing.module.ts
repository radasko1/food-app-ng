import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodCategoryComponent } from './component/food-category/food-category.component';
import { FoodSubcategoryComponent } from './component/food-subcategory/food-subcategory.component';

const routes: Routes = [
  {
    path: 'category/:id',
    component: FoodSubcategoryComponent,
  },
  {
    path: 'category',
    component: FoodCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodCategoryRoutingModule {}
