import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private employee_api_url: string = 'http://localhost:8000/api/employee';

  constructor(private httpClient: HttpClient) { }

  createEmployee(employee: any): Observable<any> {
    return this.httpClient.post(this.employee_api_url, employee)
      .pipe(
        map((resp: any) => JSON.parse(JSON.stringify(resp))),
        catchError(error => this.throwError(error))
      )

  }
  getEmployees(): Observable<any> {
    return this.httpClient.get(this.employee_api_url + '')
      .pipe(
        map((resp: any) => JSON.parse(JSON.stringify(resp))),
        catchError(error => this.throwError(error))
      )
  }
  getEmployee(id: number | string): Observable<any> {
    return this.httpClient.get(`${this.employee_api_url}/${id}`)
      .pipe(
        map((resp: any) => JSON.parse(JSON.stringify(resp))),
        catchError(error => this.throwError(error))
      )
  }
  updateEmployee(id: number | string, employee: any): Observable<any> {
    return this.httpClient.put(`${this.employee_api_url}/${id}`, employee)
      .pipe(
        map((resp: any) => JSON.parse(JSON.stringify(resp))),
        catchError(error => this.throwError(error))
      )
  }

  deleteEmployee(id: string | number): Observable<any> {
    return this.httpClient.delete(`${this.employee_api_url}/${id}`)
      .pipe(
        map((resp: any) => JSON.parse(JSON.stringify(resp))),
        catchError(error => this.throwError(error))
      )

  }
  throwError(error: any) : any {
     throw error.json().error || 'Server error';
    // return Observable.throw(error.json().error || 'Server error');
  }

}
