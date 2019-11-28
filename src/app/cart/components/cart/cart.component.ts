import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { CartService } from '../../services';

import { CartProductModel } from '../../models';
import { Order as OrderEnum } from '../../../shared/models';
import { OrderByOptions } from '../../../shared/helpers';
import { AppState, CreateOrder } from '../../../core/store';
import { UserProfileService } from '../../../core/services';

@Component({
  selector: 'sh-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts$: Observable<CartProductModel[]>;
  totalAmount$: Observable<number>;
  totalCount$: Observable<number>;
  userId$: Observable<number>;

  itemPluralMapping: { [key: string]: string } = {'=1': '# item', other: '# items'};

  OrderType = OrderEnum;
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

  constructor(
    private store: Store<AppState>,
    private cartService: CartService,
    private profileService: UserProfileService
  ) {
  }

  ngOnInit() {
    this.cartProducts$ = this.cartService.cartProducts$;
    this.totalCount$ = this.cartService.totalCount$;
    this.totalAmount$ = this.cartService.totalAmount$;
    this.userId$ = this.profileService.user$
      .pipe(
        map(user => user ? user.id : null)
      );
  }

  onDeleteProductFromCart(id: number): void {
    this.cartService.deleteProduct(id);
  }

  onChangeCount({count, id}): void {
    this.cartService.changeProductCount(id, count);
  }

  onClear(): void {
    this.cartService.deleteAll();
  }

  onOrderByChanged(value: OrderEnum): void {
    this.orderBy = {...this.orderBy, desc: !!(Number(value))};
  }

  onFieldNameChanged(value: string): void {
    this.orderBy = {...this.orderBy, field: value};
  }

  onCreateOrder(): void {
    combineLatest(
      this.cartProducts$,
      this.totalAmount$,
      this.userId$
    ).pipe(
      first()
    ).subscribe(([products, totalAmount, userId]) => {
      this.store.dispatch(new CreateOrder({
        id: +new Date(),
        products: products.map(p => p.id),
        totalAmount,
        userId
      }));

      this.onClear();
    });
  }
}
