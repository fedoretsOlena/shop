import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import { ProductModel } from '../../../products/models';

export const productsAdapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();

export interface ProductsState extends EntityState<ProductModel> {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: string;
}

export const initialProductsState: ProductsState = productsAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: null
});

