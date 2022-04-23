import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /**
   * Keep this path empty allow user divide "/category" from "/category/4" and show different component.
   * The empty path is probably not helping the way of lazy loaded modules, because empty path is triggered
   * almost always, if user not coming straight to the specific path.
   * There must be better solution to have path filled and divide routes in module.
   * One solution is have "id" parameter in module with resolution logic for written url path.
   */
  {
    path: '',
    loadChildren: () =>
      import('./module/food-category/food-category.module').then(
        (m) => m.FoodCategoryModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./module/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // enable for debug purpose
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
