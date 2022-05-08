import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { ProductRecordComponent } from './component/product-record/product-record.component';

/**
 * Path list is ordered in way, that some of them may collide with each other.
 * That is way some of them are written before the others to be triggered first.
 * Order of these paths is important and should not be changed.
 */
const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/:id',
    component: ProductRecordComponent,
    data: {
      reuseRoute: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
