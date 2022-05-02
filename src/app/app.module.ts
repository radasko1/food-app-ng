import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FoodCategoryModule } from './module/food-category/food-category.module';
import { NotFoundModule } from './module/not-found/not-found.module';
import { SharedModule } from './shared/module/shared-module/shared.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteStrategy } from './shared/strategy/custom-route-strategy';
import { HttpClientModule } from '@angular/common/http';
import { RecordModule } from './module/record-form/record-form.module';
import { CategoryFormModule } from './module/category-form/category-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import in app module to use HttpClient globally
    HttpClientModule,
    NotFoundModule, // 404 Page Not Found Module
    RecordModule,
    CategoryFormModule,
    FoodCategoryModule,
    SharedModule,
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
