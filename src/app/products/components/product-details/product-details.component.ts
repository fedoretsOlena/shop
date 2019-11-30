import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProductModel } from '../../models';

import { CartService } from '../../../cart/services';
import { AppState, getProductsByUrl } from '../../../core/store';

@Component({
  selector: 'sh-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<ProductModel>;

  constructor(
    private store: Store<AppState>,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.product$ = this.store.select(getProductsByUrl);
  }

  onAddProductToCart(product: ProductModel): void {
    const p = {...product, price: product.sale ? product.newPrice : product.price};

    this.cartService.addProduct(p);
  }
}
