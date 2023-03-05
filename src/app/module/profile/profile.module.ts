import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { NavProfileComponent } from './components/nav-profile/nav-profile.component';

@NgModule({
	declarations: [NavProfileComponent],
	imports: [CommonModule, OverlayPanelModule],
	exports: [NavProfileComponent],
})
export class ProfileModule {}
