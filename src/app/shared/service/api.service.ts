import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
	constructor(private http: HttpClient) {}

	get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

	getOne<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
