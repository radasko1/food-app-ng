import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../../../shared/model/search-result.interface';
import { API_PATH } from '../../../shared/constant/api-path.constant';

@Injectable()
export class SearchService {
	constructor(private http: HttpClient) {}

	/**
	 * Get search results of searched term.
	 */
	getSearchResults(searchTerm: string): Observable<SearchResult> {
		return this.http.get<SearchResult>(`${API_PATH}/search`, {
			params: {
				filter: searchTerm,
			},
		});
	}
}
