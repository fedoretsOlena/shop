import { createFeatureSelector, createSelector } from '@ngrx/store';

import { OrdersState } from './orders.state';

export const getOrdersState = createFeatureSelector<OrdersState>('orders');

export const getOrdersData = createSelector(
  getOrdersState, (state: OrdersState) => [...state.data]
);
