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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NotFoundModule, // 404 Page Not Found Module
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
