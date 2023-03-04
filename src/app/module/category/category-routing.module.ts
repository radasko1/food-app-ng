import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './component/category/category.component';
import { CategoryDetailComponent } from './component/category-detail/category-detail.component';
import { AppRoutes } from '../../shared/app.routes';

/**
 * Without root redirect routing navigation doesn't work properly.
 */
const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: AppRoutes.CATEGORY,
	},
	{
		path: AppRoutes.CATEGORY,
		component: CategoryComponent,
	},
	{
		path: AppRoutes.CATEGORY_DETAIL,
		component: CategoryDetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CategoryRoutingModule {}
