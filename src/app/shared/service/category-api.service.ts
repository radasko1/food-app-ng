import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FoodCategory } from '../model/food-category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  private apiUrlPath = environment.apiUrl + '/api/v1';

  constructor(private http: HttpClient) {}

  /**
   * Get collection of Category entities
   */
  get(): Observable<FoodCategory[]> {
    return this.http.get<FoodCategory[]>(this.apiUrlPath + '/food-category');
  }

  /**
   * Get Category entity by unique id
   * @param id
   */
  getOne(id: string): Observable<FoodCategory> {
    return this.http.get<FoodCategory>(
      this.apiUrlPath + '/food-category/' + id
    );
  }

  /**
   * Create new Category entity
   * @param formBody
   */
  create(formBody: unknown): Observable<FoodCategory> {
    return this.http.post<FoodCategory>(
      this.apiUrlPath + '/food-category',
      formBody
    );
  }
}
