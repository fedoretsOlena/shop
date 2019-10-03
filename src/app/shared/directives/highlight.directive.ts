import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[shHighlight]'
})
export class HighlightDirective {

  constructor() { }

  @HostBinding('class.bg-info')
  private ishover: boolean;

  @HostListener('mouseover')
  onMouseover() {
    this.ishover = true;
  }

  @HostListener('mouseout')
  onMouseout() {
    this.ishover = false;
  }

}

