import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url="http://localhost:8090/api/customers"
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(url);
  }
  
  get(id: any): Observable<any> {
    return this.http.get<any>(`${url}/${id}`);
  }
  delete(id: any): Observable<any> {
    return this.http.get<any>(`${url}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(url, data);
  }
}

