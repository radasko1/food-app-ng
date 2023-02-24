import { Component } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

import translation from './product-record-form.translation.json';
import { CategoryService } from '../../../category/service/category.service';
import { MarketService } from '../../../../shared/service/market.service';
import { ProductRecordService } from '../../../../shared/service/product-record.service';
import { ProductRecord } from '../../../../shared/model/product-record.interface';

@Component({
	selector: 'product-record-form',
	templateUrl: './product-record-form.component.html',
})
export class ProductRecordFormComponent {
	protected translation = translation;
	protected marketList$ = this.marketService.get();
	protected categoryList$ = this.categoryService.getAll();
	protected formGroup: FormGroup;
	protected productFormGroup: FormGroup[];

	constructor(
		private fb: FormBuilder,
		private marketService: MarketService,
		private categoryService: CategoryService,
		private productRecordService: ProductRecordService
	) {
		this.formGroup = this.fb.group({
			// TODO: GMT date problem
      // TODO: czech month names
			date: new FormControl<Date | null>(null, Validators.required),
			marketId: new FormControl<number | null>(null, Validators.required),
		});
		this.productFormGroup = [
			this.fb.group({
				name: new FormControl<string>('', Validators.required),
				categoryId: new FormControl<number | null>(
					null,
					Validators.required
				),
				price: new FormControl<number | null>(
					null,
					Validators.required
				),
				weight: new FormControl<number | null>(
					null,
					Validators.required
				),
				// additional fields for valid form
				date: new FormControl<Date>(new Date(), Validators.required),
				marketId: new FormControl<number>(-1, Validators.required),
			}),
		];
	}

	protected addFormGroup(): void {
		this.productFormGroup.push(
			this.fb.group({
				name: new FormControl<string>('', Validators.required),
				categoryId: new FormControl<number | null>(
					null,
					Validators.required
				),
				price: new FormControl<number | null>(
					null,
					Validators.required
				),
				weight: new FormControl<number | null>(
					null,
					Validators.required
				),
				// additional fields for valid form
				date: new FormControl<Date>(new Date(), Validators.required),
				marketId: new FormControl<number>(0, Validators.required),
			})
		);
	}

	protected removeFormGroup(index: number): void {
		this.productFormGroup.splice(index, 1);
	}

	protected submit(): void {
		if (this.formGroup.status !== 'VALID') {
			return;
		}

		const productRecordData: ProductRecord[] = [];

		// assign 'date' and 'market' control to all product forms
		for (let i = 0; i < this.productFormGroup.length; i++) {
			const form = this.productFormGroup[i];

			productRecordData.push({
				...form.value,
				...this.formGroup.value,
			});
		}

		this.productRecordService.create(productRecordData).subscribe();

		this.formGroup.reset();
		this.productFormGroup = [];
    this.addFormGroup();
	}
}
