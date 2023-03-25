import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { WeightPipe } from './pipe/weight.pipe';
import { ProductComponent } from './component/product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormModule } from '../form/form.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [WeightPipe, ProductComponent],
	imports: [
		TableModule,
		RouterModule,
		ProductRoutingModule,
		SharedModule,
		DialogModule,
		FormModule,
	],
	exports: [WeightPipe],
})
export class ProductModule {}
