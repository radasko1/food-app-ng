import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { NavProfileComponent } from './components/nav-profile/nav-profile.component';

@NgModule({
	declarations: [NavProfileComponent],
	imports: [CommonModule, OverlayModule],
	exports: [NavProfileComponent],
})
export class ProfileModule {}
