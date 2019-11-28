import { Injectable } from '@angular/core';

import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { OrdersService } from '../../../orders/services/orders.service';
import * as OrdersActions from './orders.actions';
import { IOrderModel } from '../../../orders/models';
import * as productsActions from '../products/products.actions';
import * as routerActions from '../router';


@Injectable()
export class OrdersEffects {

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) {
  }

  @Effect()
  getOrdersByUser$: Observable<Action> = this.actions$
    .pipe(
      ofType(OrdersActions.OrdersActionTypes.LoadOrdersByUser),
      switchMap(() => this.ordersService.getOrdersByUser()),
      map((orders) => new OrdersActions.LoadOrdersSuccess(orders)),
      catchError((err) => of(new OrdersActions.LoadOrdersFailure(err)))
    );

  @Effect()
  getOrders$: Observable<Action> = this.actions$
    .pipe(
      ofType(OrdersActions.OrdersActionTypes.LoadOrders),
      switchMap(() => this.ordersService.getOrders()),
      map((orders) => new OrdersActions.LoadOrdersSuccess(orders)),
      catchError((err) => of(new OrdersActions.LoadOrdersFailure(err)))
    );

  @Effect()
  updateOrder$: Observable<Action> = this.actions$
    .pipe(
      ofType(OrdersActions.OrdersActionTypes.UpdateOrder),
      switchMap((action: any) => this.ordersService.updateOrder(action.payload)),
      map((order) => new OrdersActions.UpdateOrderSuccess(order)),
      catchError((err) => of(new OrdersActions.UpdateOrderFailure(err)))
    );

  @Effect()
  createOrder$: Observable<Action> = this.actions$
    .pipe(
      ofType(OrdersActions.OrdersActionTypes.CreateOrder),
      switchMap((action: any) => this.ordersService.createOrder(action.payload)),
      map((order: IOrderModel) => new OrdersActions.CreateOrderSuccess(order)),
      catchError((err) => of(new OrdersActions.CreateOrderFailure(err)))
    );

  createOrderSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(
     OrdersActions.OrdersActionTypes.CreateOrderSuccess
    ),
    map(() => routerActions.go({
        path: ['/orders']
      })
    )));
}
