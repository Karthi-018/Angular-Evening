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

  addEmployee()
  {
    this.employees.unshift(new Employee("106","FFF","18000","ParTime"));
  }

  ngOnInit(): void {
  }

}
