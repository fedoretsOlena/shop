import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, pluck, switchMap, tap } from 'rxjs/operators';

import { UserServiceModel } from '../models';
import { SettingsModel, UserProfileService, ApiConfig } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private profileService: UserProfileService
  ) {
  }

  isLogin(): boolean {
    return this.profileService.isLogin();
  }

  login(user: Partial<UserServiceModel>): Promise<object> {
    return this.http.post<{ accessToken: string }>(ApiConfig.LOGIN_URL, user)
      .pipe(
        map(({ accessToken }) => this.decodeJWTToken(accessToken)),
        pluck('sub'),
        switchMap((id) => this.http.get<SettingsModel>(`http://localhost:3000/users/${id}`)),
        tap(currUser => this.profileService.changeUser(currUser))
      )
      .toPromise()
      .catch(({ error }) => {
        if (error.includes('user')) {
          throw({ email: error });
        }

        if (error.toLowerCase().includes('password')) {
          throw({ password: error });
        }

        throw ({ common: error });
      });
  }

  logout(): void {
    this.profileService.changeUser(null);
  }

  private decodeJWTToken(accessToken: string): { [key: string]: any } {
    return JSON.parse(atob(accessToken.split('.')[1]));
  }
}
