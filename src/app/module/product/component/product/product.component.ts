import { Component } from '@angular/core';
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
export class ProductComponent  {
  protected translation = translation;
  protected products$ = this.productService.products$;

  constructor(private productService: ProductService) {}
}
