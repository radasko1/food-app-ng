import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRecordComponent } from './component/new-record/new-record.component';

const routes: Routes = [
  {
    path: 'product/new-record',
    component: NewRecordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordFormRoutingModule {}
