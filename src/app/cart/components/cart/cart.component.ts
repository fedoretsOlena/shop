import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from '../../services';

import { CartProductModel } from '../../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts$: Observable<CartProductModel[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts$ = this.cartService.cartProductsSink$;
  }

  deleteProductFromCart(id: number): void {
    this.cartService.deleteProduct(id);
  }

}
