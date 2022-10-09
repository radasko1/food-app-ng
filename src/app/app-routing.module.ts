import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadStrategy } from './shared/strategy/custom-preload-strategy';

const routes: Routes = [];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			enableTracing: false, // enable for debug purpose
			preloadingStrategy: CustomPreloadStrategy,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
