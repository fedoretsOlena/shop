import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

import { AppSettingsService, UserProfileService } from './core/services';

@Component({
  selector: 'sh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('appTitle', {static: false})
  titleEl: ElementRef;

  isAuthPage = false;
  subs: Subscription = new Subscription();

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private profileUser: UserProfileService,
    private appSettings: AppSettingsService
  ) {
  }

  ngOnInit() {
    this.startListenRouterEvents();
    this.printAppSettings();
    this.subs.add(this.profileUser.user$.subscribe());
  }

  ngAfterViewInit(): void {
    const text = this.renderer.createText('There is a space for bookworms.');

    this.renderer.appendChild(this.titleEl.nativeElement, text);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  startListenRouterEvents(): void {
    this.subs.add(this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        pluck('url'),
      )
      .subscribe((url: string) => this.isAuthPage = url.includes('auth')));
  }

  private async printAppSettings() {
    console.log('App Settings: ', await this.appSettings.getSettings());
  }
}

