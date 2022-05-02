import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCategoryComponent } from './component/new-category/new-category.component';

const routes: Routes = [
  {
    path: 'category/new-category',
    component: NewCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryFormRoutingModule {}
