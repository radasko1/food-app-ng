import { NgModule } from '@angular/core';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [ErrorPagesRoutingModule],
  exports: [NotFoundComponent],
})
export class ErrorPagesModule {}
