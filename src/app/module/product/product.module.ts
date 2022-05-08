import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/product/product.component';
import { ProductRecordComponent } from './component/product-record/product-record.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared/module/shared-module/shared.module';
import { ProductHeaderPanelComponent } from './component/header-panel/header-panel.component';

/**
 * List of components available in the module.
 * Grouped in one to save time and better readability.
 * @constant
 */
const moduleComponents = [
  ProductComponent,
  ProductRecordComponent,
  ProductHeaderPanelComponent,
];

@NgModule({
  declarations: moduleComponents,
  exports: moduleComponents,
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}