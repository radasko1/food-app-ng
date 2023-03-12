import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductRecordFormComponent } from './component/product-record-form/product-record-form.component';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { AppRoutes } from '../../shared/app.routes';

const routes: Routes = [
	{
		path: AppRoutes.FORM_PRODUCT_RECORD,
		component: ProductRecordFormComponent,
	},
	{
		path: AppRoutes.FORM_CATEGORY,
		component: CategoryFormComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class FormRoutingModule {}
