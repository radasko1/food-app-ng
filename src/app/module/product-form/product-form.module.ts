import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/module/shared-module/shared.module';
import { NewProductComponent } from './component/new-product/new-product.component';
import { ProductFormRoutingModule } from './product-form-routing.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    ProductFormRoutingModule,
  ],
  exports: [NewProductComponent],
  declarations: [NewProductComponent],
})
export class ProductFormModule {}
