import { initialOrdersState, OrdersState } from './orders.state';
import { OrdersActions, OrdersActionTypes } from './orders.actions';

import { OrderModel } from '../../../orders/models';

export const ordersFeatureKey = 'orders';

export function ordersReducer(
  state = initialOrdersState,
  action: OrdersActions
): OrdersState {
  switch (action.type) {
    case OrdersActionTypes.LoadOrders:
    case OrdersActionTypes.LoadOrdersByUser: {
      return {
        ...state,
        loading: true
      };
    }
    case OrdersActionTypes.CreateOrderSuccess: {
      const { payload } = action;
      const newOrder = new OrderModel(payload);

      return {
        ...state,
        data: [ newOrder, ...state.data ],
      };
    }
    case OrdersActionTypes.UpdateOrderSuccess: {
      const newOrders = [ ...state.data ];
      const updated = action.payload;
      const findOrderInx = newOrders.findIndex(order => order.id === updated.id);
      newOrders[findOrderInx] = updated;

      return {
        ...state,
        data: newOrders
      };
    }

    case OrdersActionTypes.LoadOrdersSuccess: {
      const data = [...action.payload];
      return {
        ...state,
        data,
        loading: false,
        loaded: true
      };
    }
    case OrdersActionTypes.LoadOrdersFailure:
    case OrdersActionTypes.CreateOrderFailure:
    case OrdersActionTypes.UpdateOrderFailure: {
      return {
        ...state,
        error: action.payload
      };
    }
    case OrdersActionTypes.ResetOrders: {
      return { ...initialOrdersState };
    }

    default:
      return state;
  }
}
