import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './component/product/product.component';

/**
 * Without root redirect routing navigation doesn't work properly.
 */
const routes: Routes = [
  {
    path: ':id',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
