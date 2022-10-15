import { Component, Input } from '@angular/core';
import translation from './translation.json';
import { ProductService } from '../../service/product.service';

@Component({
	selector: 'app-header-panel',
	templateUrl: './header-panel.component.html',
	styleUrls: ['./header-panel.component.scss'],
})
export class ProductHeaderPanelComponent {
	translation = translation;

	/**
	 * Show button in header, which leads to new product record form.
	 */
	@Input() newRecordVisibility = false;
	/**
	 * Show delete button in header.
	 */
	@Input() deleteProductVisibility = false;
	/**
	 * Page title.
	 * Title value can have delay and may be changed more times.
	 */
	@Input() title: string | null = null;
	/**
	 * Identifier of product used in new record form.
	 * Fill product identifier form control in new record form if user navigate from product detail page.
	 */
	@Input() productId: string | null = null;

	constructor(private productService: ProductService) {}

	/**
	 * Delete Product.
	 * @param id
	 */
	deleteProduct(id: string | null) {
		this.productService.delete(id)?.subscribe();
	}
}
