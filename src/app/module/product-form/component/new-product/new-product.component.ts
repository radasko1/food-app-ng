import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import translation from './new-product.translation.json';
import { ProductService } from '../../../../shared/service/product.service';
import { Product } from '../../../../shared/model/product.interface';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  productForm: FormGroup;
  productList: Product[] = [];
  translation = translation;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    // set default form values
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
    });

    this.productService.get().subscribe((c) => {
      if (c) {
        this.productList = c;
      }
    });
  }

  /**
   * Form submit handler
   */
  onSubmit() {
    if (this.productForm.status === 'INVALID') {
      return;
    }

    // find out if there is better solution than empty subscribe()
    this.productService.create(this.productForm.value).subscribe();
  }
}
