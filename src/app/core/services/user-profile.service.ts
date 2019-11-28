import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CoreModule } from '../core.module';
import { SettingsModel, UserRole } from '../models';
import { LocalStorageService } from './local-storage.service';
import { ConfigOptionsService } from './config-options.service';

@Injectable({
  providedIn: CoreModule
})
export class UserProfileService {
  private readonly USER_KEY = 'user';
  private userSink: BehaviorSubject<SettingsModel>
    = new BehaviorSubject<SettingsModel>(this.localStorage.getItem(this.USER_KEY) || null);

  user$: Observable<SettingsModel> = this.userSink.asObservable()
    .pipe(
      tap(user => this.config.settings = user),
      tap(user => user ? this.localStorage.setItem(this.USER_KEY, user) : this.localStorage.removeItem(this.USER_KEY))
    );

  isLogin$: Observable<boolean> = this.user$
    .pipe(
      map(user => !!user),
    );

  constructor(
    private config: ConfigOptionsService,
    @Inject(localStorage) private localStorage: LocalStorageService
  ) { }

  changeUser(user: SettingsModel): void {
    this.userSink.next(user);
  }

  isLogin(): boolean {
    const { settings } = this.config;

    return !!Object.keys(settings).length;
  }

  getUserId(): number {
    return this.config.settings.id;
  }

  getRoles(): UserRole[] {
    const { settings } = this.config;

    return settings.hasOwnProperty('roles') ? settings.roles : [];
  }
}
