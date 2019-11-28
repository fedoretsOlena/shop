import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { UserRole } from '../../../core/models';
import { AppState, ResetOrders } from '../../../core/store';
import { UserProfileService } from '../../../core/services';

@Component({
  selector: 'sh-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  isUserAuthorized$: Observable<boolean>;

  routes = [{
    label: 'Home',
    link: '/product-list'
  }, {
    label: 'Admin',
    link: '/admin',
    roles: [UserRole.ADMIN]
  }];

  constructor(
    private router: Router,
    private profileService: UserProfileService,
    private store: Store<AppState>
  ) {
    this.isUserAuthorized$ = this.profileService.isLogin$;
  }

  logout(): void {
    this.profileService.changeUser(null);
    this.store.dispatch(new ResetOrders());

    if (this.router.url.indexOf('admin') > -1 || this.router.url.indexOf('orders') > -1) {
      this.router.navigate(['auth']);
    }
  }
}
