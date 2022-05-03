import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { FoodCategory } from '../model/food-category.interface';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  private readonly apiUrlPath = environment.apiUrl + '/api/v1/food-category/';
  // cached values
  private _categories$: Observable<FoodCategory[]> | null = null;

  constructor(private http: HttpClient) {}

  /**
   * Get collection of Category entities.
   *
   */
  get(): Observable<FoodCategory[]> {
    if (!this._categories$) {
      this._categories$ = this.http
        .get<FoodCategory[]>(this.apiUrlPath)
        .pipe(shareReplay(1));
    }
    return this._categories$;
  }

  /**
   * Get Category entity by unique id
   * @param id
   */
  getOne(id: string): Observable<FoodCategory> {
    return this.http.get<FoodCategory>(this.apiUrlPath + id);
  }

  /**
   * Create new Category entity
   * @param formBody
   */
  create(formBody: unknown): Observable<FoodCategory> {
    return this.http.post<FoodCategory>(this.apiUrlPath, formBody);
  }
}
