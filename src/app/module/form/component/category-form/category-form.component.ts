import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

import translation from './category-form.translation.json';
import { CategoryService } from '../../../category/service/category.service';

@Component({
	selector: 'app-category-form',
	templateUrl: './category-form.component.html',
})
export class CategoryFormComponent {
	protected translation = translation;
	protected form = this.fb.group({
		name: this.fb.control('', [
			Validators.required,
			Validators.minLength(1),
		]),
	});

	constructor(
		private fb: NonNullableFormBuilder,
		private categoryService: CategoryService
	) {}

	/** Submit form */
	protected submit() {
		if (this.form.invalid) {
			return;
		}

		this.categoryService
			.create({
				name: this.form.controls.name.value,
				parentId: null,
			})
			.subscribe({
				next: () => {
					this.form.reset();
				},
			});
	}
}
