import { Injectable } from '@angular/core';

import { OrdersModule } from '../orders.module';

@Injectable({
  providedIn: OrdersModule
})
export class OrdersService {
  constructor() {}
}
