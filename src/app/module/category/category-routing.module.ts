import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './component/category/category.component';
import { CategoryDetailComponent } from "./component/category-detail/category-detail.component";

/**
 * Without root redirect routing navigation doesn't work properly.
 */
const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'category',
	},
	{
		path: 'category',
		component: CategoryComponent,
	},
  {
    path: ':id/detail',
    component: CategoryDetailComponent
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CategoryRoutingModule {}
