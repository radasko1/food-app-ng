import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Market } from '../model/market.interface';
import { FOOD_APP_API_URL } from '../constant/api-path.constant';
import { ApiService } from './api.service';
import { CacheData } from '../decorators/cache-http-request.decorator';

const URL = `${FOOD_APP_API_URL}/market`;

@Injectable()
export class MarketService {
	constructor(private apiService: ApiService) {}

	/**
	 * Get all markets.
	 */
	@CacheData('markets')
	getAll(): Observable<Market[]> {
		return this.apiService.get<Market[]>(URL);
	}
}
