import { Order } from '../models';

export const OrderByOptions: { value: Order, label: string }[] = [{
    label: 'ASC',
    value: Order.ASC
  }, {
    label: 'DESC',
    value: Order.DESC
  }];
