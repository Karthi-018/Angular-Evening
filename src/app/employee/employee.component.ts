import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class EmployeeComponent implements OnInit {

 @Input() employee:Employee 
  constructor() {
this.employee = new Employee("E102",'Karthi','Training')

   }

  ngOnInit(): void {
  }

}


