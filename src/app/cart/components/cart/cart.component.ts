import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from '../../services';

import { CartProductModel } from '../../models';
import { Order } from '../../../shared/models';
import { OrderByOptions } from '../../../shared/helpers';

@Component({
  selector: 'sh-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts$: Observable<CartProductModel[]>;
  totalAmount$: Observable<number>;
  totalCount$: Observable<number>;

  itemPluralMapping: {[key: string]: string} = {'=1': '# item', other: '# items'};

  Order = Order;
  orderBy: { desc: boolean; field: string } = {
    desc: true,
    field: 'price'
  };
  orderByOptions = OrderByOptions;
  productOptions: { value: string }[] = [{
    value: 'price'
  }, {
    value: 'name'
  }, {
    value: 'count'
  }];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts$ = this.cartService.cartProducts$;
    this.totalCount$ = this.cartService.totalCount$;
    this.totalAmount$ = this.cartService.totalAmount$;
  }

  onDeleteProductFromCart(id: number): void {
    this.cartService.deleteProduct(id);
  }

  onChangeCount({ count, id }): void {
    this.cartService.changeProductCount(id, count);
  }

  onClear(): void {
    this.cartService.deleteAll();
  }

  onOrderByChanged(value: Order): void {
    this.orderBy = {...this.orderBy, desc: !!(Number(value)) };
  }

  onFieldNameChanged(value: string): void {
    this.orderBy = { ...this.orderBy, field: value };
  }
}
