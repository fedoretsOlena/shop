import { createFeatureSelector } from '@ngrx/store';

import { OrdersState } from './orders.state';

export const getOrdersState = createFeatureSelector<OrdersState>('orders');
