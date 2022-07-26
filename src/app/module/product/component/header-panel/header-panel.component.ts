import { Component, Input } from '@angular/core';
import translation from './translation.json';
import { ProductService } from '../../../../shared/service/product.service';

@Component({
	selector: 'app-header-panel',
	templateUrl: './header-panel.component.html',
	styleUrls: ['./header-panel.component.scss'],
})
export class ProductHeaderPanelComponent {
	// set of texts used in template
	translation = translation;

  /**
   * Show button in header, which leads to new product record form.
   */
	@Input() showRecordButton = false;
  /**
   * Show button in header, which leads to new product form.
   */
	@Input() showProductButton = false;
  /**
   * Show delete button in header.
   */
	@Input() showDeleteProductButton = false;
	@Input() title: string | null = null; // title value can have delay and may be changed more times
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
		this.productService.deleteProduct(id)?.subscribe();
	}
}
