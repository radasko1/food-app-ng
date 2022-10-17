import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Market } from '../model/market.interface';
import { API_PATH } from '../constant/api-path.constant';
import { ApiService } from './api.service';

@Injectable()
export class MarketService {
	private readonly url = `${API_PATH}/market`;

	constructor(private api: ApiService) {}

	/**
	 * Get all markets.
	 */
	get(): Observable<Market[]> {
		return this.api.get<Market[]>(this.url);
	}
}
