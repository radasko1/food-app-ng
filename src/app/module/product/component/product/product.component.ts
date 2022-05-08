import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../../../shared/model/product.interface';
import translation from './product.translation.json';
import { ProductService } from '../../../../shared/service/product.service';

/**
 * List of all available products.
 */
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]> = new Observable<Product[]>();
  translation = translation;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.get();
  }
}
