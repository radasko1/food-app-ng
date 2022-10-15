import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.interface';
import { API_PATH } from '../../../shared/constant/api-path.constant';
import { ApiService } from '../../../shared/service/api.service';

@Injectable()
export class ProductService {
	private readonly url = `${API_PATH}/product`; // TODO: create constant

	constructor(private http: HttpClient, private apiService: ApiService) {}

	/**
	 * Get all products.
	 */
	get(): Observable<Product[]> {
		return this.apiService.get(this.url);
	}

	/**
	 * Get Product entity by unique id
	 * @param id
	 */
	getOne(id: string): Observable<Product> {
		return this.apiService.get<Product>(`${this.url}/${id}`);
	}

	/**
	 * Delete Product from database.
	 * @param id
	 */
	delete(id: string | null): Observable<unknown> | null {
		if (!id) {
			return null;
		}

		return this.http.delete<unknown>(`${this.url}/${id}`);
	}
}
