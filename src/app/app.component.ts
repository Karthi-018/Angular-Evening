import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  uname : string = "Yaazhini";
  empName = {'empName':'Karthi'}
  counted : number=10;

  changedValue(num:number)
  {
    this.counted=num
  }
  
  constructor()
  {
    console.log(" App Componenet constructor "+this.uname)
  }

  ngOnInit()
  {
    console.log(" App Componenet ngOnit Method "+ this.uname)
  }
}
