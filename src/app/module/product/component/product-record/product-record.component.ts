import { Component, Input } from '@angular/core';
import translation from './product-record.translation.json';
import { ProductRecord } from '../../../../shared/model/product-record.interface';

@Component({
	selector: 'app-product-record',
	templateUrl: './product-record.component.html',
})
export class ProductRecordComponent {
	protected translation = translation;

	/**
	 * List of product records.
	 */
	@Input() productRecords: ProductRecord[] = [];
}
