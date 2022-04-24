# FoodAppFrontend

## Problems

- using `[routerLink]="['/category', category.id]"` will not trigger routing path to load component, therefore I wrapped card with link tag
  - may be caused by missing other router parameters (`replaceLocationChange`, `relativeTo`, ...)
  - [https://angular.io/api/router/RouteReuseStrategy](https://angular.io/api/router/RouteReuseStrategy)
