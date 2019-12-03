import { Action } from '@ngrx/store';

import { IOrderModel, OrderModel } from '../../../orders';

export enum OrdersActionTypes {
  LoadOrders = '[Admin Orders page] Load Orders',
  LoadOrdersByUser = '[Orders Page] Load Orders By User',
  LoadOrdersSuccess = '[Get Orders Effect] Load Orders Success',
  LoadOrdersFailure = '[Get Orders Effect] Load Orders Failure',
  CreateOrder = '[Cart] Create Order',
  CreateOrderSuccess = '[Create Order Effect] Create Order Success',
  CreateOrderFailure = '[Create Order Effect] Create Order Failure',
  UpdateOrder = '[Admin Orders] Update Order',
  UpdateOrderSuccess = '[Update Order Effect] Update Order Success',
  UpdateOrderFailure = '[Update Order Effect] Update Order Failure',
  ResetOrders = '[Nav] Reset Orders'
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
