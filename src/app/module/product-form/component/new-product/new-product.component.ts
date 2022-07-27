import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import translation from './new-product.translation.json';
import { ProductService } from '../../../../shared/service/product.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-new-product',
	templateUrl: './new-product.component.html',
	styleUrls: ['./new-product.component.scss'],
	providers: [MessageService],
})
export class NewProductComponent {
	productForm: UntypedFormGroup;
	translation = translation;
	subs: Subscription = new Subscription();

	constructor(
		private formBuilder: UntypedFormBuilder,
		private productService: ProductService,
		private messageService: MessageService
	) {
		// set default form values
		this.productForm = this.formBuilder.group({
			name: ['', Validators.required],
		});
	}

	/**
	 * Form submit handler
	 */
	onSubmit() {
		if (this.productForm.status === 'INVALID') {
			return;
		}

		// find out if there is better solution than empty subscribe()
		this.subs = this.productService
			.createProduct(this.productForm.value)
			.subscribe((form) => {
				if (!form) {
					return;
				}

				this.messageService.add({
					severity: 'success',
					summary: translation.addSuccess,
					life: 2200,
				});

				this.productForm.reset();
			});
	}
}
