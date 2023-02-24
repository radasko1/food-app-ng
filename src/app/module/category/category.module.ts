import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './component/category/category.component';
import { CategoryDetailComponent } from './component/category-detail/category-detail.component';
import { CategoryService } from './service/category.service';
import { SharedModule } from '../../shared/shared.module';
import { ProductModule } from '../product/product.module';

@NgModule({
	declarations: [CategoryComponent, CategoryDetailComponent],
	imports: [
		CategoryRoutingModule,
		ProductModule,
		InputTextModule,
		FormsModule,
		SharedModule,
	],
	providers: [CategoryService],
	exports: [CategoryComponent],
})
export class CategoryModule {}
