import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import translation from './product-record-form.translation.json';
import { CategoryService } from '../../../category/service/category.service';
import { ProductService } from '../../../product/service/product.service';
import { Product } from '../../../product/model/product.interface';
import { MarketService } from '../../../../shared/service/market.service';
import { Market } from '../../../../shared/model/market.interface';
import { ProductRecordService } from '../../../../shared/service/product-record.service';
import { ProductRecord } from '../../../../shared/model/product-record.interface';

@Component({
	selector: 'product-record-form',
	templateUrl: './product-record-form.component.html',
})
export class ProductRecordFormComponent implements OnInit {
	protected translation = translation;
	protected marketList$: Observable<Market[]> = of([]);
	protected productList$: Observable<Product[]> = of([]);
	protected formGroup: FormGroup;
	protected productFormGroup: FormGroup[];

	constructor(
		private fb: FormBuilder,
		private marketService: MarketService,
		private categoryService: CategoryService,
		private productService: ProductService,
		private productRecordService: ProductRecordService
	) {
		this.formGroup = this.fb.group({
      // TODO: GMT date problem
			date: new FormControl<Date | null>(null, Validators.required),
			marketId: new FormControl<number | null>(null, Validators.required),
		});
		this.productFormGroup = [
			this.fb.group({
				name: new FormControl<string>('', Validators.required),
				productId: new FormControl<number | null>(
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

	ngOnInit() {
		this.marketList$ = this.marketService.get();
		this.productList$ = this.productService.get();
	}

	protected addFormGroup(): void {
		this.productFormGroup.push(
			this.fb.group({
				name: new FormControl<string>('', Validators.required),
				productId: new FormControl<number | null>(
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
    this.productFormGroup.forEach((fg) => fg.reset());
	}
}
