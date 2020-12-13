import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from './playground/recursive-tree/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    { provide: "BASE_URL", useValue: environment.apiUrl }
  ]
})
export class AppComponent {
  title = 'myShop';

  public employees: any; // Employee[] = [];

  // constructor(http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  //   http.get<Employee[]>(baseUrl + 'employee/GetEmployees').subscribe(result => {
  //       debugger;
  //       this.employees = result;
  //   }, error => console.error(error));
  // }
  



}
