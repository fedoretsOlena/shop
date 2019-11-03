import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartService } from '../../../cart/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'sh-cart-indicator',
  templateUrl: './cart-indicator.component.html',
  styleUrls: ['./cart-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartIndicatorComponent implements OnInit {
  totalAmount$: Observable<number>;
  totalCount$: Observable<number>;

  constructor(private cartService: CartService) {
    this.totalCount$ = this.cartService.totalCount$;
    this.totalAmount$ = this.cartService.totalAmount$;
  }

  ngOnInit() {
  }

}
