import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FoodCategoryModule } from './module/food-category/food-category.module';
import { NotFoundModule } from './module/not-found/not-found.module';
import { PrimeNGModule } from './shared/module/prime-ng/primeng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NotFoundModule, // 404 Page Not Found Module
    FoodCategoryModule,
    AppRoutingModule,
    PrimeNGModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
