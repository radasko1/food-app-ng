import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRecord } from '../model/product-record.interface';
import { API_PATH } from '../constant/api-path.constant';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root',
})
export class ProductRecordService {
	private readonly url = `${API_PATH}/product-record`;

	constructor(private api: ApiService) {}

	/**
	 * Create new Product entity
	 * @param formBody
	 */
	create(
		formBody: ProductRecord | ProductRecord[]
	): Observable<ProductRecord | ProductRecord[]> {
		return this.api.create<ProductRecord>(this.url, formBody);
	}
}
