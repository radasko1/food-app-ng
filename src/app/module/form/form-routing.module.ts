import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductRecordFormComponent } from './component/product-record-form/product-record-form.component';
import { AppRoutes } from '../../shared/app.routes';

const routes: Routes = [
	{
		path: AppRoutes.FORM_PRODUCT_RECORD, // product-record/:product
		component: ProductRecordFormComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
	declarations: [],
})
export class FormRoutingModule {}
