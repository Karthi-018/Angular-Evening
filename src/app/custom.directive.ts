import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

@Input()  category:any;

  constructor(private e:ElementRef,private  renderer : Renderer2) { 

    // this.renderer.setStyle(this.e.nativeElement,'background-color','green')
  }
  
  ngOnInit()  {
    if(this.category =='Full Time')
    {
      console.log(this.category)
      this.renderer.setStyle(this.e.nativeElement,'background-color','green')
    }
    else if(this.category=='ParTime')
    {
      this.renderer.setStyle(this.e.nativeElement,'background-color','red')
    }
    else if(this.category=='Parment')
    {
      this.renderer.setStyle(this.e.nativeElement,'background-color','black')
    }
  }

}
