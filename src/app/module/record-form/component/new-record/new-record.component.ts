import { Component, OnDestroy, OnInit } from '@angular/core';
import {
	UntypedFormBuilder,
	UntypedFormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../../../../shared/service/product.service';
import { MarketApiService } from '../../../../shared/service/market-api.service';
import { ProductRecordService } from '../../../../shared/service/product-record.service';
import translation from './new-record.translation.json';

@Component({
	selector: 'app-new-record',
	templateUrl: './new-record.component.html',
	styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit, OnDestroy {
	private subs = new Subject<boolean>();
	private routeParams: Params | null = null;
	protected translation = translation;
	protected recordForm: UntypedFormGroup;
	protected products$ = this.productService.products$;
	protected markets$ = this.marketApiService.get();

	constructor(
		private route: ActivatedRoute,
		private formBuilder: UntypedFormBuilder,
		private productService: ProductService,
		private marketApiService: MarketApiService,
		private productApiService: ProductRecordService,
		private messageService: MessageService
	) {
		// set form default values
		this.recordForm = this.formBuilder.group({
			name: ['', Validators.required],
			price: [null, Validators.required],
			weight: [null],
			date: [new Date(), Validators.required],
			productId: ['', Validators.required],
			marketId: ['', Validators.required],
		});
	}

	ngOnInit() {
		this.routeParams = this.route.snapshot.queryParams;

		if (this.routeParams && this.routeParams['productId']) {
			this.recordForm.patchValue({
				product: parseInt(this.routeParams['productId'], 10),
			});
		}
	}

	ngOnDestroy() {
		this.subs.next(true);
		this.subs.unsubscribe();
	}

	/**
	 * When record form is submitted.
	 */
	onSubmit() {
		// transform "date" into ISO format
		this.recordForm.patchValue({
			date: new Date(this.recordForm.value.date).toISOString(), // TODO: check if GMT zone is alright
		});

		this.productApiService
			.create(this.recordForm.value)
			.pipe(takeUntil(this.subs))
			.subscribe((form) => {
				if (!form) {
					return;
				}

				this.messageService.add({
					severity: 'success',
					summary: translation.addSuccess,
					life: 2200,
				});

				this.recordForm.reset();
				if (this.routeParams && this.routeParams['productId']) {
					this.productService.removeProductRecord(
						this.routeParams['productId']
					);
				}
			});
	}
}
