import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from '../../services';

import { CartProductModel } from '../../models';

@Component({
  selector: 'sh-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts$: Observable<CartProductModel[]>;
  totalAmount$: Observable<number>;
  totalCount$: Observable<number>;

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
}
