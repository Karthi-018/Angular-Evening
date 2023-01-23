import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { categories, employees } from '../model/employeelist';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  categories = categories;
  cat:string = 'all';
  employees:Employee[];
  constructor() { 
    this.employees=employees;
  }

 
  ngOnInit(): void {
  }

  createEmployee()
  {
    this.employees.push(new Employee("06","ABC","HR","Temp"));
  }

}
