import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Market } from '../model/market.interface';
import { FOOD_APP_API_URL } from '../constant/api-path.constant';
import { ApiService } from './api.service';
import { CacheData } from '../decorators/cache-http-request.decorator';

@Injectable()
export class MarketService {
	private readonly url = `${FOOD_APP_API_URL}/market`;

	constructor(private api: ApiService) {}

	/**
	 * Get all markets.
	 */
  @CacheData('markets')
	getAll(): Observable<Market[]> {
		return this.api.get<Market[]>(this.url);
	}
}
