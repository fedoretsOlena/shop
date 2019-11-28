import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OrderModel, Status } from '../../../orders/models';
import { AppState, getOrdersState, LoadOrders, UpdateOrder } from '../../../core/store';

@Component({
  selector: 'sh-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {
  ORDER_STATUS = Status;
  orders$: Observable<OrderModel[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.orders$ = this.store.pipe(select(getOrdersState))
      .pipe(
        map(state => [...state.data])
      );

    this.store.dispatch(new LoadOrders());
  }

  onChangeStatus(status: Status, order: OrderModel): void {
    this.store.dispatch(new UpdateOrder({ ...order, status }));
  }
}
