import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateUrl } from './router.state';

export const getRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getRouterParams = createSelector(getRouterState, router => router.state.params);
