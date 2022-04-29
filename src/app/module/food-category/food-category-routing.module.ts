import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodCategoryComponent } from './component/food-category/food-category.component';
import { FoodCategoryDetailComponent } from './component/food-category-detail/food-category-detail.component';
import { NewCategoryComponent } from './component/new-category/new-category.component';
import { NewRecordComponent } from './component/new-record/new-record.component';

/**
 * Path list is ordered in way, that some of them may collide with each other.
 * That is way some of them are written before the others to be triggered first.
 * Order of these paths is important and should not be changed.
 */
const routes: Routes = [
  {
    path: 'category',
    component: FoodCategoryComponent,
  },
  {
    path: 'category/new-category',
    component: NewCategoryComponent,
  },
  {
    path: 'category/new-record',
    component: NewRecordComponent,
  },
  {
    path: 'category/:id',
    component: FoodCategoryDetailComponent,
    data: {
      reuseRoute: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodCategoryRoutingModule {}
