import { AfterViewInit, Component, Input } from '@angular/core';

import translation from './product-record.translation.json';
import { ProductRecord } from '../../../../shared/model/product-record.interface';
import { AppRoutes } from '../../../../shared/app.routes';

@Component({
	selector: 'app-product-record',
	templateUrl: './product-record.component.html',
})
export class ProductRecordComponent implements AfterViewInit{
	protected translation = translation;
	protected appRoutes = AppRoutes;

	/**
	 * List of product records.
	 */
	@Input() productRecords: ProductRecord[] = [];

  ngAfterViewInit() {
    console.log(this.productRecords);
  }
}
