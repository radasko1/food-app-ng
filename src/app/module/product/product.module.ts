import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';

import { ProductRecordComponent } from './component/product-record/product-record.component';
import { WeightPipe } from './pipe/weight.pipe';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [ProductRecordComponent, WeightPipe],
	exports: [ProductRecordComponent, WeightPipe],
	providers: [],
	imports: [TableModule, RouterModule, SharedModule],
})
export class ProductModule {}
