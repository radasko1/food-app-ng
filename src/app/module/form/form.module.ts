import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

import { FormRoutingModule } from './form-routing.module';
import { ProductRecordFormComponent } from './component/product-record-form/product-record-form.component';
import { SharedModule } from '../../shared/shared.module';
import { MarketService } from '../../shared/service/market.service';

@NgModule({
	declarations: [ProductRecordFormComponent],
	imports: [
		CalendarModule,
		DropdownModule,
		InputTextModule,
    InputNumberModule,
		FormRoutingModule,
		SharedModule,
		ReactiveFormsModule,
	],
	exports: [ProductRecordFormComponent],
	providers: [MarketService],
})
export class FormModule {}
