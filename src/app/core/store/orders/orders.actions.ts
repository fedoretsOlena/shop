import { Action } from '@ngrx/store';

import { IOrderModel, OrderModel } from '../../../orders';

export enum OrdersActionTypes {
  LoadOrders = '[Orders] Load Orders',
  LoadOrdersByUser = '[Orders] Load Orders By User',
  LoadOrdersSuccess = '[Orders] Load Orders Success',
  LoadOrdersFailure = '[Orders] Load Orders Failure',
  CreateOrder = '[Orders] Create Order',
  CreateOrderSuccess = '[Orders] Create Order Success',
  CreateOrderFailure = '[Orders] Create Order Failure',
  UpdateOrder = '[Orders] Update Order',
  UpdateOrderSuccess = '[Orders] Update Order Success',
  UpdateOrderFailure = '[Orders] Update Order Failure',
  ResetOrders = '[Orders] Reset Orders'
}

export class LoadOrders implements Action {
  readonly type = OrdersActionTypes.LoadOrders;
}

export class LoadOrdersByUser implements Action {
  readonly type = OrdersActionTypes.LoadOrdersByUser;
}

export class LoadOrdersSuccess implements Action {
  readonly type = OrdersActionTypes.LoadOrdersSuccess;

  constructor(public payload: OrderModel[]) {
  }
}

export class LoadOrdersFailure implements Action {
  readonly type = OrdersActionTypes.LoadOrdersFailure;

  constructor(public payload: Error | string) {
  }
}

export class CreateOrder implements Action {
  readonly type = OrdersActionTypes.CreateOrder;

  constructor(public payload: IOrderModel) {
  }
}

export class CreateOrderSuccess implements Action {
  readonly type = OrdersActionTypes.CreateOrderSuccess;

  constructor(public payload: IOrderModel) {
  }
}

export class CreateOrderFailure implements Action {
  readonly type = OrdersActionTypes.CreateOrderFailure;

  constructor(public payload: Error | string) {
  }
}

export class UpdateOrder implements Action {
  readonly type = OrdersActionTypes.UpdateOrder;

  constructor(public payload: OrderModel) {
  }
}


export class UpdateOrderSuccess implements Action {
  readonly type = OrdersActionTypes.UpdateOrderSuccess;

  constructor(public payload: any) {
  }
}

export class UpdateOrderFailure implements Action {
  readonly type = OrdersActionTypes.UpdateOrderFailure;

  constructor(public payload: Error | string) {
  }
}

export class ResetOrders implements Action {
  readonly type = OrdersActionTypes.ResetOrders;
}

export type OrdersActions =
  LoadOrders
  | LoadOrdersByUser
  | LoadOrdersSuccess
  | LoadOrdersFailure
  | CreateOrder
  | CreateOrderSuccess
  | CreateOrderFailure
  | UpdateOrder
  | UpdateOrderSuccess
  | UpdateOrderFailure
  | ResetOrders;
