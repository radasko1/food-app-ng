import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FoodRecord } from "../model/food-record.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private readonly apiUrlPath = environment.apiUrl + '/api/v1/food/';

  constructor(private http: HttpClient) { }

  /**
   * Create new Product entity
   * @param formBody
   */
  create(formBody: unknown): Observable<FoodRecord> {
    return this.http.post<FoodRecord>(this.apiUrlPath, formBody);
  }
}
