import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import translation from './category.translation.json';
import { CategoryService } from '../service/category.service';
import { Category } from '../../../shared/model/category.interface';

@Component({
	selector: 'app-category',
	templateUrl: 'category.component.html',
})
export class CategoryComponent implements OnInit {
	protected categoryList: Observable<Category[]> = of([]);
	protected category: Observable<Category> = of();
	protected translation = translation;
  protected params = this.route.snapshot.params;

	constructor(
		private categoryService: CategoryService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
    // switch between root category and subcategory
    if (this.params['id']) {
      this.category = this.categoryService.getOne(this.params['id']);
    } else {
			this.categoryList = this.categoryService.getRoot();
    }
	}
}
