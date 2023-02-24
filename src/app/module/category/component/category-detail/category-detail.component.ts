import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../service/category.service';

interface DetailPageParams {
	id: string;
}

@Component({
	selector: 'app-category-detail',
	templateUrl: './category-detail.component.html',
})
export class CategoryDetailComponent {
	private pageUrlParams = this.router.snapshot.params as DetailPageParams;
	protected category$ = this.categoryService.getOne(this.pageUrlParams.id);

	constructor(
		private router: ActivatedRoute,
		private categoryService: CategoryService
	) {}
}
