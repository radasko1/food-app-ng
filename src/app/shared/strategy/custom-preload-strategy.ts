import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route?.data?.preloadStrategy ? fn() : EMPTY;
  }
}
