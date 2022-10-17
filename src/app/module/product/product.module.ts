import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProductComponent } from './component/product/product.component';
import { ProductRecordComponent } from './component/product-record/product-record.component';
import { WeightPipe } from './pipe/weight.pipe';
import { ProductService } from './service/product.service';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [ProductComponent, ProductRecordComponent, WeightPipe],
	exports: [ProductComponent, ProductRecordComponent, WeightPipe],
	providers: [ProductService],
	imports: [TableModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
