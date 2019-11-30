import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productsAdapter, ProductsState } from './products.state';
import { productsFeatureKey } from './products.reducer';
import { getRouterParams } from '../router';
import { ProductModel } from '../../../products';

export const getProductsState = createFeatureSelector<ProductsState>(productsFeatureKey);

export const {
  selectEntities: getProductsEntities,
  selectAll: getProductsData
} = productsAdapter.getSelectors(getProductsState);

export const getProductsLoading = createSelector(getProductsState, (state: ProductsState) =>
  state.loading);

export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) =>
  state.loaded);

export const getProductsError = createSelector(getProductsState, (state: ProductsState) =>
  state.error);

export const getProductsByUrl = createSelector(
  getProductsEntities,
  getRouterParams,
  (products, {productID}): ProductModel => {

    if (productID) {
      return products[productID];
    }

    return null;
  });
