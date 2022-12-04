import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './module/product/product.module';
import { CategoryModule } from './module/category/category.module';
import { SearchModule } from './module/search/search.module';
import { FormModule } from './module/form/form.module';
import { CustomRouteStrategy } from './shared/strategy/custom-route-strategy';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		SharedModule,
		CategoryModule,
		ProductModule,
		SearchModule,
		FormModule,
		AppRoutingModule,
	],
	providers: [
		{
			provide: RouteReuseStrategy,
			useClass: CustomRouteStrategy,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
