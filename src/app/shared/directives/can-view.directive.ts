import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

import { Subscription } from 'rxjs';
import { map, pluck, skip } from 'rxjs/operators';

import { UserProfileService, UserRole } from '../../core';

@Directive({
  selector: '[shCanView]'
})
export class CanViewDirective implements OnDestroy {
  @Input()
  set shCanView(expectedRoles: UserRole[]) {
    const userRoles = this.profileService.getRoles();

    this.checkPermissions(userRoles, expectedRoles);
  }

  private userSub: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private profileService: UserProfileService
  ) {
    this.userSub = this.startListeningUser();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  private startListeningUser(): Subscription {

    return this.profileService.user$
      .pipe(
        skip(1),
        map(user => user || {roles: []}),
        pluck('roles')
      )
      .subscribe((roles: UserRole[]) => this.checkPermissions(roles));
  }

  private checkPermissions(
    userRoles: UserRole[],
    expectedRoles: UserRole[] = this.shCanView || []
  ): void {
    const hasEnoughPermission = !!expectedRoles.length
      && expectedRoles.every((role) => userRoles.find(userRole => userRole === role));

    if (hasEnoughPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
