import {
  ActivatedRouteSnapshot,
  BaseRouteReuseStrategy,
} from '@angular/router';

export class CustomRouteStrategy extends BaseRouteReuseStrategy {
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.data.reuseRoute || curr.data.reuseRoute;
  }
}
