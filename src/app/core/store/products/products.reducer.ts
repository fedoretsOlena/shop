import { Action, createReducer, on } from '@ngrx/store';

import { initialProductsState, productsAdapter, ProductsState } from './products.state';

import * as productsActions from './products.actions';

export const productsFeatureKey = 'products';

const reducer = createReducer(
  initialProductsState,
  on(productsActions.loadProducts, (state) => ({...state, loading: true})),
  on(productsActions.loadProductsSuccess, (state, {data}) => productsAdapter.addAll([...data], {
    ...state,
    loading: false,
    loaded: true
  })),
  on(productsActions.updateProductSuccess, (state, {product}) => productsAdapter.updateOne({
    id: product.id,
    changes: product
  }, state)),
  on(productsActions.addProductSuccess, (state, {product}) => productsAdapter.addOne(product, state)),
  on(
    productsActions.loadProductsFailure,
    (state, {error}) => ({...state, error, loading: false, loaded: false})),
  on(
    productsActions.addProductFailure,
    productsActions.updateProductFailure,
    (state, {error}) => ({...state, error})),
);

export function productsReducer(
  state: ProductsState,
  action: Action
) {
  return reducer(state, action);
}
