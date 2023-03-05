import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './module/product/product.module';
import { CategoryModule } from './module/category/category.module';
import { SearchModule } from './module/search/search.module';
import { FormModule } from './module/form/form.module';
import { ProfileModule } from './module/profile/profile.module';
import { CustomRouteStrategy } from './shared/strategy/custom-route-strategy';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

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
		ProfileModule,
		AppRoutingModule,
		AuthModule.forRoot({
			domain: environment.auth0.domain,
			clientId: environment.auth0.clientId,
			redirectUri: window.location.origin,
		}),
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
