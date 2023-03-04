import { Component, Input, OnInit } from '@angular/core';

import translation from './product-record.translation.json';
import { ProductRecord } from '../../../../shared/model/product-record.interface';
import { AppRoutes } from '../../../../shared/app.routes';

@Component({
	selector: 'app-product-record',
	templateUrl: './product-record.component.html',
})
export class ProductRecordComponent implements OnInit {
	protected translation = translation;
	protected appRoutes = AppRoutes;

	/**
	 * List of product records.
	 */
	@Input() productRecords: ProductRecord[] = [];

	ngOnInit() {
		this.productRecords.forEach((prodRecord) => {
			prodRecord.ratio = prodRecord.weight / prodRecord.price;
		});
	}
}
