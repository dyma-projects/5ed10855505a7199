import { Directive, Renderer2, ElementRef, Input, OnInit, DoCheck, AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective  {

  @Input() appColor;

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }
  @HostListener('window:keydown',['$event']) windowKeyPress($event) {
    //console.log($event.code);
    this.changeColor(this.appColor[$event.code]);
  }



  changeColor(color: string) {
    //console.log(color);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }





}
