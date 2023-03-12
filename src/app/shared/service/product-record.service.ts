import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductRecord } from '../model/product-record.interface';
import { FOOD_APP_API_URL } from '../constant/api-path.constant';
import { ApiService } from './api.service';
import { ProductRecordForm } from "../model/product-record-form.interface";

@Injectable({
	providedIn: 'root',
})
export class ProductRecordService {
	private readonly url = `${FOOD_APP_API_URL}/product-record`;

	constructor(private api: ApiService) {}

	/**
	 * Create new Product entity
	 * @param formBody
	 */
	create(
		formBody: ProductRecordForm | ProductRecordForm[]
	): Observable<ProductRecord | ProductRecord[]> {
		return this.api.create<ProductRecord>(this.url, formBody);
	}
}
