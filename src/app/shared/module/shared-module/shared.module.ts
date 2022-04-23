import { NgModule } from '@angular/core';
import { ReturnBackComponent } from '../../component/return-back/return-back.component';
import { PrimeNGModule } from '../prime-ng/primeng.module';

@NgModule({
  declarations: [ReturnBackComponent],
  imports: [PrimeNGModule],
  exports: [ReturnBackComponent],
})
export class SharedModule {}
