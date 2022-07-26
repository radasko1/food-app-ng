import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.interface';
import { shareReplay } from 'rxjs/operators';
import { ProductRecord } from '../model/product-record.interface';
import { FormBody } from "../../module/record-form/model/form-body.interface";

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private readonly apiUrlPath = environment.apiUrl + '/api/v1/product/';
	// cached values
	private _products$: Observable<Product[]> | null = null;
	private _productRecords$: { [key: string]: Observable<ProductRecord[]> } = {};

	constructor(private http: HttpClient) {}

	/**
	 * Get collection of Product entities.
	 */
	getProducts(): Observable<Product[]> {
		if (!this._products$) {
			this._products$ = this.http
				.get<Product[]>(this.apiUrlPath)
				.pipe(shareReplay(1));
		}
		return this._products$;
	}

  /**
   * Clear Product cache.
   */
  clearProducts() {
    this._products$ = null;
  }

	/**
	 * Get Product entity by unique id
	 * @param id
	 */
	getSingleProduct(id: string): Observable<Product> {
		return this.http.get<Product>(this.apiUrlPath + id);
	}

	/**
	 * Create new Product entity
	 * @param formBody
	 */
	createProduct(formBody: FormBody): Observable<Product> {
		return this.http.post<Product>(this.apiUrlPath, formBody);
	}

  /**
   * Delete Product from database.
   * @param id
   */
  deleteProduct(id: string | null): Observable<unknown> | null {
    if (!id) {
      return null;
    }

    return this.http.delete<unknown>(this.apiUrlPath + id);
  }

	/**
	 * Get collection of product records
	 * @param id
	 */
	getProductRecords(id: string): Observable<ProductRecord[]> {
		if (!this._productRecords$[id]) {
			this._productRecords$[id] = this.http
				.get<ProductRecord[]>(this.apiUrlPath + id + '/records')
				.pipe(shareReplay(1));
		}
		return this._productRecords$[id];
	}

  /**
   * Remove cached data to be initiated again.
   * @param id
   */
  removeProductRecord(id: string) {
    if (this._productRecords$[id]) {
      delete this._productRecords$[id];
    }
  }
}
