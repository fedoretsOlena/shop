import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'sh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: false })
  titleEl: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {

    const text = this.renderer.createText('I was created by ViewChild and Renderer2!');

    this.renderer.appendChild(this.titleEl.nativeElement, text);
  }
}
