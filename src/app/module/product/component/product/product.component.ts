import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import translation from './product.translation.json';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.interface';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit, OnDestroy {
	private subs = new Subject<boolean>();
	private params = this.route.snapshot.params;
	protected product$: Observable<Product> = of();
	protected translation = translation;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService
	) {}

	ngOnInit() {
		if (this.params['id']) {
			this.product$ = this.productService
				.getOne(this.params['id'])
				.pipe(takeUntil(this.subs));
		}
	}

	ngOnDestroy() {
		this.subs.next(true);
		this.subs.unsubscribe();
	}
}
