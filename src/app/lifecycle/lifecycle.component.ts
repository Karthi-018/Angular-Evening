import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck {

  @Input() uName!:string

  @Input() employee = {'eName':this.uName} 


  constructor() {

    console.log("Lifecycle Constructor Called "+this.uName)
    console.log("Lifecycle Constructor Called "+this.employee)
   }
  ngDoCheck(): void {
    console.log("Ng DoCheck LifeCycle Methos is called "+this.uName)
    console.log("Ng DoCheck LifeCycle Methos is called "+this.employee)
  }
  ngOnChanges(): void {
    console.log("Ng OnChanges LifeCycle Methos is called "+this.uName)
    console.log("Ng OnChanges LifeCycle Methos is called "+this.employee)
  }

  ngOnInit(): void {

    console.log("Ng onInit LifeCycle Methos is called "+this.uName)
    console.log("Ng onInit LifeCycle Methos is called "+this.employee)

  }

  

}
