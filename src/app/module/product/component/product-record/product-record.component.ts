import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import translation from './product-record.translation.json';
import { Observable } from 'rxjs';
import { ProductService } from '../../../../shared/service/product.service';
import { Product } from '../../../../shared/model/product.interface';
import { ProductRecord } from '../../../../shared/model/product-record.interface';

/**
 * Detail for Product, where can be found list with records.
 */
@Component({
  selector: 'app-product-record',
  templateUrl: './product-record.component.html',
  styleUrls: ['./product-record.component.scss'],
})
export class ProductRecordComponent implements OnInit {
  productId = '';
  product$ = new Observable<Product>();
  translation = translation;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.route.snapshot.params) {
      return;
    }

    this.productId = this.route.snapshot.params.id;

    // cache this response from Product list page
    // TODO: cache product collection?
    this.product$ = this.productService.getSingleProduct(this.productId);
  }
}
