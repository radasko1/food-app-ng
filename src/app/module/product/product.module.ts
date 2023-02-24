import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';

import { ProductRecordComponent } from './component/product-record/product-record.component';
import { WeightPipe } from './pipe/weight.pipe';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [ProductRecordComponent, WeightPipe],
	imports: [TableModule, RouterModule, SharedModule],
	exports: [ProductRecordComponent, WeightPipe],
})
export class ProductModule {}
