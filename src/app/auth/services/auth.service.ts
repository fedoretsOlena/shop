import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';

import { serverUsers } from '../mocks/';
import { UserServiceModel } from '../models';
import { SettingsModel, UserProfileService } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private profileService: UserProfileService
  ) {
  }

  isLogin(): boolean {
    return this.profileService.isLogin();
  }

  login(user: Partial<UserServiceModel>): Observable<SettingsModel> {
    const users: UserServiceModel[] = [...serverUsers];
    const currUser = users.find((i) => i.login === user.login);

    if (!currUser) {
      return throwError({login: `There is no such user as ${user.login}`});
    }

    if (currUser.password !== user.password) {
      return throwError({password: `Password is wrong.`});
    }

    this.profileService.changeUser(currUser);

    return of(currUser);
  }

  logout(): void {
    this.profileService.changeUser(null);
  }
}
