import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../shared/service/api.service';
import { apiPath } from '../../../shared/constant/api/api-path.constant';
import { Category } from '../../../shared/model/category.interface';
import { CacheService } from '../../../shared/service/cache.service';

@Injectable()
export class CategoryService {
	private readonly url = apiPath + 'category';
	private readonly cacheKey = 'category';
	private cache = new CacheService<Category[]>();

	constructor(private api: ApiService) {}

	/**
	 * Get all categories.
	 */
	get(): Observable<Category[]> {
		const cacheValue = this.cache.getValue(this.cacheKey);

		if (cacheValue) {
			return of(cacheValue);
		}

		return this.api.get<Category[]>(this.url).pipe(
			map((categoryList) => {
				this.cache.setValue(this.cacheKey, categoryList);
				return categoryList;
			})
		);
	}

  /**
   * Get all root categories.
   */
  getRoot(): Observable<Category[]> {
    return this.api.get<Category[]>(`${this.url}/root`);
  }

	/**
	 * Get category by ID.
	 * @param id
	 */
	getOne(id: string): Observable<Category> {
		return this.api.getOne<Category>(`${this.url}/${id}`);
	}
}
