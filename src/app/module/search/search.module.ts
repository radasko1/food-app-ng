import { NgModule } from '@angular/core';
import { SearchComponent } from './component/search.component';
import { SharedModule } from '../../shared/module/shared-module/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [SharedModule, FormsModule],
  exports: [SearchComponent],
})
export class SearchModule {}
