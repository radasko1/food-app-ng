import { Component, Input } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

import translation from './product-record-form.translation.json';
import { CategoryService } from '../../../category/service/category.service';
import { MarketService } from '../../../../shared/service/market.service';
import { ProductRecordService } from '../../../../shared/service/product-record.service';
import { ProductRecordForm } from '../../../../shared/model/product-record-form.interface';

@Component({
	selector: 'product-record-form',
	templateUrl: './product-record-form.component.html',
})
export class ProductRecordFormComponent {
	@Input() productId: number = -1;

	protected translation = translation;
	protected marketList$ = this.marketService.getAll();
	protected productFormGroup = this.fb.group({
		price: this.fb.control<number>(0, Validators.required),
		weight: this.fb.control<number | null>(null, Validators.required),
		date: this.fb.control<Date>(new Date(), Validators.required),
		marketId: this.fb.control<number>(-1, Validators.required),
	});

	constructor(
		private fb: NonNullableFormBuilder,
		private marketService: MarketService,
		private categoryService: CategoryService,
		private productRecordService: ProductRecordService
	) {}

	protected submit(): void {
		console.log(this.productId);
		const productRecordData: ProductRecordForm = {
			productId: this.productId,
			price: this.productFormGroup.controls.price.value,
			weight: this.productFormGroup.controls.weight.value,
			date: this.productFormGroup.controls.date.value,
			marketId: this.productFormGroup.controls.marketId.value,
		};

		this.productRecordService.create(productRecordData).subscribe({
			next: () => {
				this.productFormGroup.reset();
			},
			error: (err) => {
				console.log('Nepodarilo se pridat produkty.');
			},
		});
	}
}
