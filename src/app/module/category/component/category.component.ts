import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import translation from './category.translation.json';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category.interface';

@Component({
	selector: 'app-category',
	templateUrl: 'category.component.html',
})
export class CategoryComponent implements OnInit, OnDestroy {
	private subs = new Subject<boolean>();
	private params = this.route.snapshot.params;
	protected categoryList$: Observable<Category[]> = of([]);
	protected category$: Observable<Category> = of();
	protected translation = translation;

	constructor(
		private categoryService: CategoryService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		// switch between root category and subcategory
		if (this.params['id']) {
			this.category$ = this.categoryService
				.getOne(this.params['id'])
				.pipe(takeUntil(this.subs));
		} else {
			this.categoryList$ = this.categoryService
				.getRoot()
				.pipe(takeUntil(this.subs));
		}
	}

	ngOnDestroy() {
		this.subs.next(true);
		this.subs.unsubscribe();
	}
}
