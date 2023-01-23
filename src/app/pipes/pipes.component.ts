import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  today : Date = new Date();

  employee : any = {name:'karthi',county:'India'}

  value:any;
  constructor() { }

  ngOnInit(): void {
  }

}
