import { NgModule } from '@angular/core';
import { ReturnBackComponent } from '../../component/return-back/return-back.component';
import { PrimeNGModule } from '../prime-ng/primeng.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReturnBackComponent],
  imports: [RouterModule, PrimeNGModule],
  exports: [PrimeNGModule, ReturnBackComponent],
})
export class SharedModule {}
