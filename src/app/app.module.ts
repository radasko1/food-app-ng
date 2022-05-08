import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProductModule } from './module/product/product.module';
import { NotFoundModule } from './module/not-found/not-found.module';
import { SharedModule } from './shared/module/shared-module/shared.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteStrategy } from './shared/strategy/custom-route-strategy';
import { HttpClientModule } from '@angular/common/http';
import { RecordModule } from './module/record-form/record-form.module';
import { ProductFormModule } from './module/product-form/product-form.module';
import { SearchModule } from './module/search/search.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import in app module to use HttpClient globally
    HttpClientModule,
    SharedModule,
    NotFoundModule, // 404 Page Not Found Module
    RecordModule,
    ProductFormModule,
    ProductModule,
    SearchModule,
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
