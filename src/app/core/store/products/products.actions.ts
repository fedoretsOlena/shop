import { createAction, props } from '@ngrx/store';

import { IProductModel, ProductModel } from '../../../products';

export const loadProducts = createAction(
  '[Products] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ data: ProductModel[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: IProductModel }>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ product: ProductModel }>()
);

export const updateProductFailure = createAction(
  '[Product] Update Product Failure',
  props<{ error: any }>()
);

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: IProductModel }>()
);

export const addProductSuccess = createAction(
  '[Product] Add Product Success',
  props<{ product: ProductModel }>()
);

export const addProductFailure = createAction(
  '[Product] Add Product Failure',
  props<{ error: any }>()
);
