import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/module/shared-module/shared.module';
import { NewCategoryComponent } from './component/new-category/new-category.component';
import { CategoryFormRoutingModule } from './category-form-routing.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    CategoryFormRoutingModule,
  ],
  exports: [NewCategoryComponent],
  declarations: [NewCategoryComponent],
})
export class CategoryFormModule {}
