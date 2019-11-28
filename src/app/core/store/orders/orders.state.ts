import { OrderModel } from '../../../orders/models';

export interface OrdersState {
  data: ReadonlyArray<OrderModel>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialOrdersState: OrdersState = {
  data: [],
  loading: false,
  loaded: false,
  error: null
};
