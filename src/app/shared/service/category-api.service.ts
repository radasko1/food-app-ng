import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  private apiUrlPath = environment.apiUrl + '/api/v1';

  constructor(private http: HttpClient) {}

  /**
   * Get collection of Category entities
   */
  get<T>(): Observable<T> {
    return this.http.get<T>(this.apiUrlPath + '/food-category');
  }

  /**
   * Get Category entity by unique id
   * @param id
   */
  getOne<T>(id: string): Observable<T> {
    return this.http.get<T>(this.apiUrlPath + '/food-category/' + id);
  }
}
