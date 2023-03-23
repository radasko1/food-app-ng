import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadStrategy } from './shared/strategy/custom-preload-strategy';
import { AppRoutes } from './shared/app.routes';

const routes: Routes = [
	{
		path: AppRoutes.PRODUCT,
		loadChildren: () =>
			import('./module/product/product.module').then(
				(m) => m.ProductModule
			),
	},
  // @route CATEGORY
	{
		path: AppRoutes.CATEGORY,
		loadChildren: () =>
			import('./module/category/category.module').then(
				(m) => m.CategoryModule
			),
	},
	{
		path: AppRoutes.FORM,
		loadChildren: () =>
			import('./module/form/form.module').then((m) => m.FormModule),
	},
	{
		path: '**',
		loadChildren: () =>
			import('./module/error-pages/error-pages.module').then(
				(m) => m.ErrorPagesModule
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
