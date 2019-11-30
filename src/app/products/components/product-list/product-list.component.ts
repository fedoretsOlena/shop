import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ProductModel } from '../../models';

import { ProductsService } from '../../services';
import { CartService } from '../../../cart/services';
import { AppState, getProductsData, getProductsError, getProductsLoading } from '../../../core/store';


@Component({
  selector: 'sh-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products$ = this.store.select(getProductsData);
    this.loading$ = this.store.select(getProductsLoading);
    this.error$ = this.store.select(getProductsError);
  }

  onAddProductToCart(product: ProductModel): void {
    const p = {...product, price: product.sale ? product.newPrice : product.price};

    this.cartService.addProduct(p);
  }
}
