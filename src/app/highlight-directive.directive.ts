import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor( private elem: ElementRef, ) {
    this.elem.nativeElement.style.backgroundColor= "yellow";
  }

}
