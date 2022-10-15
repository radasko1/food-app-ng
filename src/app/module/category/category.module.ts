import { NgModule } from '@angular/core';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './component/category.component';
import { CategoryService } from './service/category.service';
import { SharedModule } from '../../shared/module/shared.module';

@NgModule({
	declarations: [CategoryComponent],
	imports: [CategoryRoutingModule, SharedModule],
	providers: [CategoryService],
	exports: [CategoryComponent],
})
export class CategoryModule {}
