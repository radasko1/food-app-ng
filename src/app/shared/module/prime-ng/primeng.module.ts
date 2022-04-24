import { NgModule } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

// Import / Export
const MODULE_LIST = [
  ButtonModule,
  CardModule,
  DropdownModule,
  InputNumberModule,
  InputTextModule,
  RippleModule,
];

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
