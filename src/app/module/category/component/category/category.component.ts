import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import translation from '../../category.translation.json';
import { CategoryService } from '../../service/category.service';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
})
export class CategoryComponent implements OnDestroy {
	private subs = new Subject<boolean>();
	protected translation = translation;
	protected categoryList$ = this.categoryService
		.getAll()
		.pipe(takeUntil(this.subs));

	constructor(private categoryService: CategoryService) {}

	ngOnDestroy() {
		this.subs.next(true);
		this.subs.unsubscribe();
	}
}
