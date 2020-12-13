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
    this.treeData = 
    
    console.log(this.treeData);
  }

  toggleChildren(employee: any) {
    employee.visible = !employee.visible;
  }
  
}