import { OrdersState } from './orders';
import { ProductsState } from './products';
import { RouterState } from './router';

export interface AppState {
  router: RouterState;
  orders: OrdersState;
  products: ProductsState;
}
