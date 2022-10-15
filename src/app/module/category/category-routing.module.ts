import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './component/category.component';

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
		path: ':id',
		component: CategoryComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CategoryRoutingModule {}
