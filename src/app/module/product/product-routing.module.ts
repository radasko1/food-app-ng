import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { AppRoutes } from "../../shared/app.routes";

const routes: Routes = [
  // @route PRODUCT_DETAIL
	{
		path: AppRoutes.PRODUCT_DETAIL,
		component: ProductComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
