import { ProductModel } from '../../../products';

export interface ProductsState {
  data: ReadonlyArray<ProductModel>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialProductsState: ProductsState = {
  data: [],
  loading: false,
  loaded: false,
  error: null
};

