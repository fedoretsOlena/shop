import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from './products.state';
import { productsFeatureKey } from './products.reducer';
import { getRouterParams } from '../router';
import { ProductModel } from '../../../products';

export const getProductsState = createFeatureSelector<ProductsState>(productsFeatureKey);

export const getProductsData = createSelector(getProductsState, (state: ProductsState) =>
  [...state.data]);

export const getProductsLoading = createSelector(getProductsState, (state: ProductsState) =>
  state.loading);

export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) =>
  state.loaded);

export const getProductsByUrl = createSelector(
  getProductsData,
  getRouterParams,
  (products: ProductModel[], {productID}): ProductModel => {

    if (productID) {
      return products.find(product => product.id === +productID);
    }

    return null;
  });
