import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule, CommonModule],
	exports: [CommonModule],
})
export class SharedModule {}
