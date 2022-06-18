import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRecord } from '../model/product-record.interface';

@Injectable({
	providedIn: 'root',
})
export class ProductRecordService {
	private readonly apiUrlPath =
		environment.apiUrl + '/api/v1/product-record/';

	constructor(private http: HttpClient) {}

	/**
	 * Create new Product entity
	 * @param formBody
	 */
	create(formBody: unknown): Observable<ProductRecord> {
		return this.http.post<ProductRecord>(this.apiUrlPath, formBody);
	}
}
