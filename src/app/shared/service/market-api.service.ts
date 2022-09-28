import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Market } from '../model/market.interface';

@Injectable({
	providedIn: 'root',
})
export class MarketApiService {
	private readonly apiUrlPath = environment.apiUrl + '/api/v1/market/';
	// cached values
	private _markets$: Observable<Market[]> | null = null;

	constructor(private http: HttpClient) {}

	/**
	 * Get collection of Market entities.
	 */
	get(): Observable<Market[]> {
		if (!this._markets$) {
			this._markets$ = this.http
				.get<Market[]>(this.apiUrlPath)
				.pipe(shareReplay(1));
		}
		return this._markets$;
	}
}
