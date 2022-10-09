import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './module/product/product.module';
import { RecordModule } from './module/record-form/record-form.module';
import { ProductFormModule } from './module/product-form/product-form.module';
import { CategoryModule } from "./module/category/category.module";
import { SearchModule } from './module/search/search.module';
import { CustomRouteStrategy } from './shared/strategy/custom-route-strategy';
import { SharedModule } from './shared/module/shared-module/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import in app module to use HttpClient globally
    HttpClientModule,
    SharedModule,
    // ErrorPagesModule, // 404 Page Not Found Module
    CategoryModule,
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
