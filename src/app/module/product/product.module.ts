import { NgModule } from '@angular/core';
import { ProductComponent } from './component/product/product.component';
import { ProductRecordComponent } from './component/product-record/product-record.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductHeaderPanelComponent } from './component/header-panel/header-panel.component';
import { WeightPipe } from './pipe/weight.pipe';
import { ProductService } from './service/product.service';
import { SharedModule } from '../../shared/module/shared.module';

@NgModule({
	declarations: [
		ProductComponent,
		ProductRecordComponent,
		ProductHeaderPanelComponent,
		WeightPipe,
	],
	exports: [
		ProductComponent,
		ProductRecordComponent,
		ProductHeaderPanelComponent,
		WeightPipe,
	],
	providers: [ProductService],
	imports: [ProductRoutingModule, SharedModule],
})
export class ProductModule {}
