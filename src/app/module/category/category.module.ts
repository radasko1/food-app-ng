import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './component/category.component';
import { CategoryService } from './service/category.service';
import { SharedModule } from '../../shared/module/shared-module/shared.module';

@NgModule({
	declarations: [CategoryComponent],
	imports: [CommonModule, CategoryRoutingModule],
	providers: [CommonModule, CategoryService, SharedModule],
	exports: [CategoryComponent],
})
export class CategoryModule {}
