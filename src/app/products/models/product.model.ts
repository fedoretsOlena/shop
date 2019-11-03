import { Genre } from './genre.enum';

export interface IProductModel {
  id: number;
  name: string;
  price: number;
  sale?: number;
  image?: string;
  authors: string[] | string;
  description: string;
  isAvailable: boolean;
  genres: Genre[] | string;
  lastUpdate: string;
}

export class ProductModel {
  id: number;
  name: string;
  price: number;
  sale?: number;
  image: string;
  authors: string[];
  description: string;
  isAvailable: boolean;
  newPrice: number | null;
  genres: Genre[];
  lastUpdate: Date;

  constructor(product: IProductModel) {
    Object.assign(this, product);

    this.newPrice = product.sale
      ? (product.price / 100 * (100 - product.sale))
      : null;

    if (!product.image) {
      this.image = 'https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg';
    }

    this.authors = this.prepareList(product.authors);
  }

  get authorsNames(): string {
    return this.authors.join(' and ');
  }

  prepareList(value: string[] | string, symbol = ','): string[] {
    if (Array.isArray(value)) {
      return value;
    }

    return value.split(symbol);
  }
}

