import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[shPretty]'
})
export class PrettyDirective {
  @Input()
  letterSpacing = '2px';

  @Input()
  color: string;

  private formatted = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', '.5s letter-spacing');
  }

  @HostListener('click')
  onClick() {
    const color = this.formatted ? 'inherit' : `1px 1px 2px ${this.color}`;
    const letterSpacing = this.formatted ? 'inherit' : this.letterSpacing;

    this.renderer.setStyle(this.el.nativeElement, 'textShadow', color);
    this.renderer.setStyle(this.el.nativeElement, 'letterSpacing', letterSpacing);

    this.formatted = !this.formatted;
  }
}
