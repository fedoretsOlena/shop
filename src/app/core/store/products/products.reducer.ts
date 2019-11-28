import { Action, createReducer, on } from '@ngrx/store';

import { initialProductsState, ProductsState } from './products.state';

import * as productsActions from './products.actions';

export const productsFeatureKey = 'products';

const reducer = createReducer(
  initialProductsState,
  on(productsActions.loadProducts, (state) => ({...state, loading: true})),
  on(productsActions.loadProductsSuccess, (state, {data}) => ({
    ...state,
    data,
    loaded: true,
    loading: false
  })),
  on(productsActions.updateProductSuccess, (state, {product}) => {
    const newData = [...state.data];
    const productInx = newData.findIndex(i => i.id === product.id);
    newData[productInx] = product;

    return {
      ...state,
      data: newData
    };
  }),
  on(productsActions.addProductSuccess, (state, {product}) => ({
    ...state,
    data: [product, ...state.data]
  })),
  on(
    productsActions.loadProductsFailure,
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
