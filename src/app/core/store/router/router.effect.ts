import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, pluck } from 'rxjs/operators';

import * as RouterActions from './router.actions';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {
  }

  @Effect({dispatch: false})
  navigate$ = this.actions$.pipe(
    ofType(RouterActions.go),
    tap(({path, queryParams, extras}) => {
      this.router.navigate(path, {queryParams, ...extras});
    })
  );

  @Effect({dispatch: false})
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActions.back),
    tap(() => this.location.back())
  );

  @Effect({dispatch: false})
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActions.forward),
    tap(() => this.location.forward())
  );
}
