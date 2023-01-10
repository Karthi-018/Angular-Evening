import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css']
})
export class InputoutputComponent implements OnInit {

@Input() count:number=0;

@Output() coutChange = new EventEmitter<number>();
change()
{
  this.count++;

  this.coutChange.emit(this.count)
}






  constructor() { }

  ngOnInit(): void {
  }

}
