import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNGModule } from './prime-ng/primeng.module';
import { ReturnBackComponent } from '../component/return-back/return-back.component';

@NgModule({
	declarations: [ReturnBackComponent],
	imports: [RouterModule, PrimeNGModule, CommonModule],
	exports: [PrimeNGModule, CommonModule, ReturnBackComponent],
})
export class SharedModule {}
