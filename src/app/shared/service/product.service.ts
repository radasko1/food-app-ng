import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
	products$ = new BehaviorSubject<Product[]>([]);
	private _productRecords$: { [key: string]: Observable<ProductRecord[]> } = {};

	constructor(private http: HttpClient) {
    this.getProducts();
  }

	/**
	 * Get collection of Product entities.
	 */
	getProducts(): void {
    this.http.get<Product[]>(this.apiUrlPath).subscribe((products) => {
      if (!products) {
        return;
      }

      this.products$.next(products);
    })
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
   * Remove cached data to be initiated again.
   * @param id
   */
  removeProductRecord(id: string) {
    if (this._productRecords$[id]) {
      delete this._productRecords$[id];
    }
  }
}
