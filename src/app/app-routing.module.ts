import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadStrategy } from './shared/strategy/custom-preload-strategy';

const routes: Routes = [
	{
		path: 'product',
		loadChildren: () =>
			import('./module/product/product.module').then(
				(m) => m.ProductModule
			),
	},
	{
		path: 'category',
		loadChildren: () =>
			import('./module/category/category.module').then(
				(m) => m.CategoryModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			enableTracing: false, // enable for debug purpose
			preloadingStrategy: CustomPreloadStrategy,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
