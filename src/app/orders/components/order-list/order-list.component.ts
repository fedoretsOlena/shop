import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, LoadOrdersByUser, OrdersState, getOrdersState } from '../../../core/store';
import { Status } from '../../models';

@Component({
  selector: 'sh-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent implements OnInit {
  ordersState$: Observable<OrdersState>;

  constructor(
    private store: Store<AppState>
  ) {
    this.ordersState$ = this.store.pipe(select(getOrdersState));

    this.store.dispatch(new LoadOrdersByUser());
  }

  ngOnInit() {
  }

  getBadgeColor(status: Status): string {
    // может этот код куда-то перенести,
    // например в какой-то вспомагательный сервис
    if (status === Status.CONFIRMED) {
      return 'warning';
    } else if (status === Status.MODERATING) {
      return 'info';
    } else {
      return 'success';
    }
  }
}
