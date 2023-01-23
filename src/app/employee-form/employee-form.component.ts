import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { categories, employees } from '../model/employeelist';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  categories = categories;
  employee :Employee;
  constructor() { 
    this.employee = new Employee("","","","");
  }

  ngOnInit(): void {
  }

}
