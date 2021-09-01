import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Employee } from "./employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee!: Employee;
  employees!: Employee[];
  readonly baseUrl = "http://localhost:8082/api/employees";

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseUrl, emp);
  };
}
