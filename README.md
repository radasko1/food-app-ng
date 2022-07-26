# FoodAppFrontend

## Changelog

Information about changes made in the application and about version release.

### 0.0.2
- product record has pipe to display 'weight' in units


## Problems

- using `[routerLink]="['/category', category.id]"` will not trigger routing path to load component, therefore I wrapped card with link tag
  - may be caused by missing other router parameters (`replaceLocationChange`, `relativeTo`, ...)
  - [https://angular.io/api/router/RouteReuseStrategy](https://angular.io/api/router/RouteReuseStrategy)
