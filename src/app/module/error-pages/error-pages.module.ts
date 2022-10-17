import { NgModule } from '@angular/core';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [NotFoundComponent],
	imports: [ErrorPagesRoutingModule, SharedModule],
	exports: [NotFoundComponent],
})
export class ErrorPagesModule {}
