import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ProductModel } from '../../models';

import { CartService } from '../../../cart/services';
import { AppState, getProductsByUrl, loadProducts } from '../../../core/store';

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
    this.product$ = this.store.select(getProductsByUrl)
      .pipe(
        tap(p => {
          if (!p) {
            this.store.dispatch(loadProducts());
          }
        })
      );
  }

  onAddProductToCart(product: ProductModel): void {
    const p = {...product, price: product.sale ? product.newPrice : product.price};

    this.cartService.addProduct(p);
  }
}
