import { createAction, props } from '@ngrx/store';

import { IProductModel, ProductModel } from '../../../products';

export const loadProducts = createAction(
  '[Product Exist Guard] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Get Products Effect] Load Products Success',
  props<{ data: ProductModel[] }>()
);

export const loadProductsFailure = createAction(
  '[Get Products Effect] Load Products Failure',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Admin product form] Update Product',
  props<{ product: IProductModel }>()
);

export const updateProductSuccess = createAction(
  '[Update Product Effect] Update Product Success',
  props<{ product: ProductModel }>()
);

export const updateProductFailure = createAction(
  '[Update Product Effect] Update Product Failure',
  props<{ error: any }>()
);

export const addProduct = createAction(
  '[Admin Product Form] Add Product',
  props<{ product: IProductModel }>()
);

export const addProductSuccess = createAction(
  '[Add Product Effect] Add Product Success',
  props<{ product: ProductModel }>()
);

export const addProductFailure = createAction(
  '[Add Product Effect] Add Product Failure',
  props<{ error: any }>()
);
