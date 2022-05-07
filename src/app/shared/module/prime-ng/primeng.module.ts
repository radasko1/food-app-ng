import { NgModule } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    RippleModule,
    TableModule,
  ],
  providers: [PrimeNGConfig],
})
export class PrimeNGModule {
  // Prime NG configuration
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }
}
