import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostlisten]',
  standalone: true
})
export class HostlistenDirective {

  @HostBinding('style.borderColor') textColor:string="";
  @HostBinding('style.outline') outline:string="0px";
  @HostBinding('style.width') width:string="300px";
  @HostBinding('style.height') height:string='30px';

  
  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.textColor = 'red'
    
  }

  @HostListener('click') onFoucs(){
    console.log("HII")
    this.textColor = 'green';
  }

  @HostListener('mouseleave') onMouseOut() {
    this.textColor = 'black';
  }


  @HostListener('input', ['$event']) onInput(event:any) {
    console.log(event.target.value);
  }

  
}
