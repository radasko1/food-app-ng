import { NgModule } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

// Import / Export
const MODULE_LIST = [ButtonModule, RippleModule];

@NgModule({
  imports: MODULE_LIST,
  exports: MODULE_LIST,
  providers: [PrimeNGConfig],
})
export class PrimeNGModule {
  // Prime NG configuration
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }
}