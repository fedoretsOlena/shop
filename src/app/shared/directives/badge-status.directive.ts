import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { Status } from '../../orders/models';

@Directive({
  selector: '[shBadgeStatus]'
})
export class BadgeStatusDirective {
  @Input()
  set shBadgeStatus(status: Status) {
    this.renderer.addClass(this.el.nativeElement, `badge-${this.getBadgeColor(status)}`);
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }


  private getBadgeColor(status: Status): string {
    if (status === Status.CONFIRMED) {
      return 'warning';
    } else if (status === Status.MODERATING) {
      return 'info';
    } else {
      return 'success';
    }
  }
}
