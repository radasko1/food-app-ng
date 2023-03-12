import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

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
	protected translation = translation;
	protected marketList$ = this.marketService.getAll();
	protected categoryList$ = this.categoryService.getAll();
	protected productFormGroup = [
		this.fb.group({
			id: this.fb.control<number>(0, Validators.required),
			price: this.fb.control<number>(0, Validators.required),
			weight: this.fb.control<number | null>(null, Validators.required),
			date: this.fb.control<Date>(new Date(), Validators.required),
			marketId: this.fb.control<number>(-1, Validators.required),
		}),
	];

	constructor(
		private fb: NonNullableFormBuilder,
		private marketService: MarketService,
		private categoryService: CategoryService,
		private productRecordService: ProductRecordService
	) {}

	protected addFormGroup(): void {
		this.productFormGroup.push(
			this.fb.group({
				id: this.fb.control<number>(0, Validators.required),
				price: this.fb.control<number>(0, Validators.required),
				weight: this.fb.control<number | null>(
					null,
					Validators.required
				),
				date: this.fb.control<Date>(new Date(), Validators.required),
				marketId: this.fb.control<number>(0, Validators.required),
			})
		);
	}

	protected removeFormGroup(index: number): void {
		this.productFormGroup.splice(index, 1);
	}

	protected submit(): void {
		const productRecordData: ProductRecordForm[] = [];

		// assign 'date' and 'market' control to all product forms
		for (let i = 0; i < this.productFormGroup.length; i++) {
			const formControlValue = this.productFormGroup[i].value;
			productRecordData.push(<ProductRecordForm>{
        id: formControlValue.id,
        price: formControlValue.price,
        weight: formControlValue.weight,
        date: formControlValue.date,
        marketId: formControlValue.marketId,
      });
		}

		this.productRecordService.create(productRecordData).subscribe({
			next: () => {
				this.productFormGroup = [];
				this.addFormGroup();
			},
			error: (err) => {
				console.log('Nepodarilo se pridat produkty.');
			},
		});
	}
}
