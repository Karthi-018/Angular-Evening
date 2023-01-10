import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { employees } from '../model/employeelist';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees:Employee[];
  constructor() { 
    this.employees=employees;
  }

  ngOnInit(): void {
  }

}
