import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState, RouterStateSerializer, routerReducer } from '@ngrx/router-store';

import { RouterState } from './router.state';

export const routerReducers: ActionReducerMap<RouterState> = {
  router: routerReducer
};
