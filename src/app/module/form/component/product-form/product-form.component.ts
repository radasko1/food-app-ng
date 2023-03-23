import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

import translation from './product-form.translation.json';
import translationGeneral from '../../../../shared/translations/general.translation.json';
import { ProductService } from '../../../../shared/service/product.service';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
	protected translation = translation;
	protected translationGeneral = translationGeneral;
	protected form = this.fb.group({
		name: this.fb.control('', [
			Validators.required,
			Validators.minLength(1),
		]),
	});

	constructor(
		private fb: NonNullableFormBuilder,
		private productService: ProductService
	) {}

	/** Form submit */
	protected submit() {
		if (this.form.invalid) {
			return;
		}

		this.productService.create({
			name: this.form.controls.name.value,
		}).subscribe({
      next: () => {
        this.form.reset();
      }
    });
	}
}
