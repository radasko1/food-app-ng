import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import locale from './product.translation.json';
import { ProductService } from '../../../../shared/service/product.service';

// todo shared?
interface DetailPageParams {
	id: string;
}

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
	private pageUrlParams = this.router.snapshot.params as DetailPageParams;
	protected product$ = this.productService.getOne(this.pageUrlParams.id);
	protected showFormDialog = false;
	protected locale = locale;

	constructor(
		private router: ActivatedRoute,
		private productService: ProductService
	) {}

	log(x: any) {
		console.log(x);
	}
}
