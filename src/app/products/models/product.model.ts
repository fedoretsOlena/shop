import { Genre } from './genre.enum';

export interface IProductModel {
  name: string;
  price: number;
  sale?: number;
  image?: string;
  authors: string[];
  description: string;
  isAvailable: boolean;
  genres: Genre[];
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

    this.id = Math.round(Math.random() * +new Date());
    this.newPrice = product.sale
      ? (product.price / 100 * (100 - product.sale))
      : null;

    if (!product.image) {
      this.image = 'https://www.tellerreport.com/images/no-image.png';
    }
  }

  get authorsNames(): string {
    return this.authors.join(' and ');
  }
}

