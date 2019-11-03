import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';

import { Observable } from 'rxjs';

import { CoreModule } from '../core.module';
import { AuthService } from '../../auth/services';

@Injectable({
  providedIn: CoreModule
})
export class AuthGuard implements CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.isUserAuthorized(route);
  }

  private isUserAuthorized(route: Route): boolean {
    const authorized = this.authService.isLogin();
    const isLoginPage = route.path.indexOf('auth') !== -1;


    if (!authorized && !isLoginPage) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    return true;
  }
}
