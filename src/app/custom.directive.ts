import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

@Input()  category:any;

@HostBinding('class') addClass: any;

  constructor(private e:ElementRef,private  renderer : Renderer2) { 

    // this.renderer.setStyle(this.e.nativeElement,'background-color','green')
  }
  
  ngOnInit()  {


    if(this.category =='Full Time')
    {
      console.log(this.category)
      this.renderer.setStyle(this.e.nativeElement,'background-color','green')
      this.addClass = 'ft'
    }
    else if(this.category=='ParTime')
    {
      this.renderer.setStyle(this.e.nativeElement,'background-color','red')
      this.addClass='pt'
    }
    else if(this.category=='Parment')
    {
      this.renderer.setStyle(this.e.nativeElement,'background-color','black')
      this.addClass='pe'
    }
    else
    {
      this.addClass ='te'
    }
  }

  @HostListener('mouseover')
  mouseover()
  {
    this.renderer.setStyle(this.e.nativeElement,'opacity','0.5')
  }

  @HostListener('mouseout')
  mouseout()
  {
    this.renderer.setStyle(this.e.nativeElement,'opacity','1')
  }
}
