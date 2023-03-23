import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ProductForm } from '../model/product-form.interface';
import { FOOD_APP_API_URL } from '../constant/api-path.constant';
import { Product } from '../model/product.interface';
import { CacheData } from '../decorators/cache-http-request.decorator';

const URL = `${FOOD_APP_API_URL}/product`;

@Injectable()
export class ProductService {
	constructor(private apiService: ApiService) {}

	@CacheData('product')
	getAll(): Observable<Product[]> {
		return this.apiService.get<Product[]>(URL);
	}

	@CacheData('product')
	getOne(id: string): Observable<Product> {
		return this.apiService.get<Product>(`${URL}/${id}`);
	}

	/**
	 * Create new ProductRecord entity
	 * @param formBody
	 */
	create(formBody: ProductForm): Observable<Product> {
		return this.apiService.create<Product>(URL, formBody);
	}
}
