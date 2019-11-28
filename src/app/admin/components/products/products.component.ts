import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProductModel } from '../../../products';
import { AppState, getProductsData, getProductsLoaded, getProductsLoading, loadProducts } from '../../../core/store';

@Component({
  selector: 'sh-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(loadProducts());

    this.products$ = this.store.select(getProductsData);
    this.loading$ = this.store.select(getProductsLoading);
    this.loaded$ = this.store.select(getProductsLoaded);
  }
}
