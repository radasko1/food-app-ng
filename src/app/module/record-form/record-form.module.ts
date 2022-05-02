import { NgModule } from '@angular/core';
import { NewRecordComponent } from './component/new-record/new-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/module/shared-module/shared.module';
import { RecordFormRoutingModule } from './record-form-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RecordFormRoutingModule,
  ],
  exports: [NewRecordComponent],
  declarations: [NewRecordComponent],
})
export class RecordModule {}
