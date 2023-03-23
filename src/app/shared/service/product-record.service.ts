import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductRecord } from '../model/product-record.interface';
import { FOOD_APP_API_URL } from '../constant/api-path.constant';
import { ApiService } from './api.service';
import { ProductRecordForm } from '../model/product-record-form.interface';

const URL = `${FOOD_APP_API_URL}/product-record`;

@Injectable({
	providedIn: 'root',
})
export class ProductRecordService {
	constructor(private apiService: ApiService) {}

	/**
	 * Create new ProductRecord entity
	 * @param formBody
   *
   * Backend endpoint expects array of ProductRecord entities
	 */
	create(formBody: ProductRecordForm): Observable<ProductRecord> {
		return this.apiService.create<ProductRecord>(URL, [formBody]);
	}
}
