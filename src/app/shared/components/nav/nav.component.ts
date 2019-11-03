import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { UserRole } from '../../../core/models';
import { UserProfileService } from '../../../core/services';

@Component({
  selector: 'sh-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
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
  ) {
    this.isUserAuthorized$ = this.profileService.isLogin$;
  }

  ngOnInit() {
  }

  logout(): void {
    this.profileService.changeUser(null);

    if (this.router.url.indexOf('admin') > -1 ) {
      this.router.navigate(['auth']);
    }
  }
}
