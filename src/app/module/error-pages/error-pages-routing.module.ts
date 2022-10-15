import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'not-found',
	},
	{
		path: 'not-found',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ErrorPagesRoutingModule {}
