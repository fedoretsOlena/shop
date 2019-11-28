import { NavigationExtras } from '@angular/router';

import { createAction, props } from '@ngrx/store';

export const go = createAction(
  '[Router] GO',
  props<{
    path: any[],
    queryParams?: object,
    extras?: NavigationExtras
  }>()
);

export const back = createAction(
  '[Router] BACK',
);

export const forward = createAction(
  '[Router] FORWARD'
);
