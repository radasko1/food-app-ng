import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../model/category.interface';
import { ApiService } from '../../../shared/service/api.service';
import { FOOD_APP_API_URL } from '../../../shared/constant/api-path.constant';
import { CacheData } from '../../../shared/decorators/cache-http-request.decorator';

/** URL for Category HTTP requests */
const URL = `${FOOD_APP_API_URL}/category`;

@Injectable()
export class CategoryService {
	constructor(private apiService: ApiService) {}

	/**
	 * Get all categories.
	 */
	@CacheData('category')
	getAll(): Observable<Category[]> {
		return this.apiService.get<Category[]>(URL);
	}

	/**
	 * Get category by ID.
	 * @param id Category identifier
	 */
  @CacheData('category')
	getOne(id: string): Observable<Category> {
		return this.apiService.getOne<Category>(`${URL}/${id}`);
	}
}
