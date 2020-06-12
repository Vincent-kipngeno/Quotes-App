import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {
  @Input('appHighlightDirective') highlightColor: string;
  constructor( private elem: ElementRef, ) { }

  highlight(color: string){
    color = this.highlightColor;
    this.elem.nativeElement.style.backgroundColor= color;
  }

}
