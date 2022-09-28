import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../../../shared/model/search-result.interface';
import { environment } from '../../../../environments/environment';
import { SEARCH_API } from '../../../shared/constant/api/search.constant';

@Injectable()
export class SearchService {
	constructor(private http: HttpClient) {}

	/**
	 * Get search results of searched term.
	 */
	getSearchResults(searchTerm: string): Observable<SearchResult> {
		return this.http.get<SearchResult>(
			environment.apiUrl + SEARCH_API.SEARCH,
			{
				params: {
					filter: searchTerm,
				},
			}
		);
	}
}
