import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

import translation from './product-form.translation.json';
import translationGeneral from '../../../../shared/translations/general.translation.json';
import { ProductService } from '../../../../shared/service/product.service';
import { CategoryService } from '../../../category/service/category.service';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
	protected translation = translation;
	protected translationGeneral = translationGeneral;
	protected form = this.fb.group({
		category: this.fb.control<number>(-1, {
			validators: [Validators.required],
		}),
		name: this.fb.control('', [
			Validators.required,
			Validators.minLength(1),
		]),
	});
	protected category$ = this.categoryService.getAll();

	constructor(
		private fb: NonNullableFormBuilder,
		private productService: ProductService,
		private categoryService: CategoryService
	) {}

	/** Form submit */
	protected submit() {
		if (this.form.invalid) {
			return;
		}

		this.productService
			.create({
				categoryId: this.form.controls.category.value,
				name: this.form.controls.name.value,
			})
			.subscribe({
				next: () => {
					this.form.reset();
				},
			});
	}
}
