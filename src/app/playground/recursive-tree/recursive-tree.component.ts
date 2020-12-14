import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-recursive-tree',
  templateUrl: './recursive-tree.component.html',
  styleUrls: ['./recursive-tree.component.css']
})
export class RecursiveTreeComponent {

  @Input() treeData: any;// Employee[];

  public employees: Employee[] = [];
  public any: any;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.treeData = [{"employeeId":1,"employeeName":"John A","managerId":null,"manager":null,"children":[{"employeeId":2,"employeeName":"Mike B","managerId":1,"manager":null,"children":[{"employeeId":4,"employeeName":"Anagha P","managerId":2,"manager":null,"children":[{"employeeId":6,"employeeName":"Ram D","managerId":4,"manager":null,"children":[]},{"employeeId":7,"employeeName":"Jack C","managerId":4,"manager":null,"children":[]}]},{"employeeId":5,"employeeName":"Advith M","managerId":2,"manager":null,"children":[]}]},{"employeeId":3,"employeeName":"Raj C","managerId":1,"manager":null,"children":[]}]}];
    console.log(this.treeData);
  }

  toggleChildren(employee: any) {
    employee.visible = !employee.visible;
  }
  
}