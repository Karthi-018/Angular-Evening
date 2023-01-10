import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  choice : boolean = false;
  nums=[23,48,56,34,18];

  employees : any = [{"eid":101,"eName":"AAA","salary":10000},
                      {"eid":102,"eName":"BBB","salary":8000},
                      {"eid":103,"eName":"CCC","salary":9000},
                      {"eid":104,"eName":"DDD","salary":12000},
                      {"eid":105,"eName":"EEE","salary":11000}]
  constructor() { }

  ngOnInit(): void {
  }

}
