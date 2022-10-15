import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from './service/search.service';
import { SearchComponent } from './component/search.component';
import { SharedModule } from '../../shared/module/shared.module';

@NgModule({
	declarations: [SearchComponent],
	imports: [
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		RouterModule,
	],
	exports: [SearchComponent],
	providers: [SearchService],
})
export class SearchModule {}
