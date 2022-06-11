import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../shared/model/product.interface';
import { Observable } from 'rxjs';
import { ProductList } from '../../model/product-list.interface';

@Component({
	selector: 'app-product-list',
	templateUrl: 'product-list.component.html',
	styleUrls: ['product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
	dataList: ProductList = {};

	/**
	 * Array of data items to show.
	 */
	@Input() dataSource: Observable<Product[]> | null = null;

	ngOnInit() {
		if (this.dataSource) {
			this.dataSource.subscribe((v) => this.sortData(v));
		}
	}

	/**
	 * Sort data items by title letter.
	 */
	sortData(data: Product[]) {
		const sortedArray = data.sort((a, b) => (a.name < b.name ? -1 : 1));

		for (let i = 0; i < sortedArray.length; i++) {
			const actualItem = sortedArray[i];
			const firstLetter = actualItem.name.charAt(0);

			this.dataList[firstLetter]
				? this.dataList[firstLetter].push(actualItem)
				: (this.dataList[firstLetter] = [actualItem]);
		}
	}
}
