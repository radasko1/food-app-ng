import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductRecordFormComponent } from './component/product-record-form/product-record-form.component';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { AppRoutes } from '../../shared/app.routes';

const routes: Routes = [
  // @route FORM_PRODUCT_RECORD
	{
		path: AppRoutes.FORM_PRODUCT_RECORD,
		component: ProductRecordFormComponent,
	},
  // @route FORM_CATEGORY
	{
		path: AppRoutes.FORM_CATEGORY,
		component: CategoryFormComponent,
	},
  // @route FORM_PRODUCT
	{
		path: AppRoutes.FORM_PRODUCT,
		component: ProductFormComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class FormRoutingModule {}
