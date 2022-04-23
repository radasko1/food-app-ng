import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodCategoryModule } from './module/food-category/food-category.module';
import { NotFoundModule } from './module/not-found/not-found.module';
import { SharedModule } from "./shared/module/shared-module/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NotFoundModule, // 404 Page Not Found Module
    FoodCategoryModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
