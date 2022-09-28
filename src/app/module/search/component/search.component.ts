import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Observable, Subject, EMPTY } from 'rxjs';
import { concatMap, debounceTime, takeUntil } from 'rxjs/operators';
import { SearchService } from '../service/search.service';
import translation from './search.translation.json';
import { SearchResult } from '../../../shared/model/search-result.interface';

@Component({
	selector: 'app-search',
	templateUrl: 'search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
	private stopSubscribe$ = new Subject<boolean>();
	protected translation = translation;
	protected searchControl = new FormControl<string>('');
	protected searchResult: SearchResult | null = null;

	constructor(private searchService: SearchService) {}

	ngOnInit() {
		// value change listener
		this.searchControl.valueChanges
			.pipe(
				takeUntil(this.stopSubscribe$),
				debounceTime(500),
				concatMap((value) => this.isNotNull<string>(value)),
				concatMap((searchTerm) =>
					this.searchService.getSearchResults(searchTerm)
				)
			)
			.subscribe((searchRes) => {
        if (searchRes.category.length || searchRes.product.length) {
				  this.searchResult = searchRes;
        } else {
          this.searchResult = null;
        }
			});
	}

	ngOnDestroy() {
		this.stopSubscribe$.next(true);
		this.stopSubscribe$.unsubscribe();
	}

	/**
	 * Controls if value is not of type 'null'.
	 * @param value
	 * @return Value of written type.
	 */
	private isNotNull<T>(value: unknown): Observable<T> {
		if (!value) {
			return EMPTY;
		}
		return of(<T>value);
	}
}
