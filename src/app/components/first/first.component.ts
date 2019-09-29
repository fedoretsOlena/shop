import { Component } from '@angular/core';

import { productMock } from './product.mock';

import { Category } from '../../products/models';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name: string;
  price: number;
  description: string;
  isAvailable: boolean;
  category: Category;

  constructor() {
    Object.assign(this, productMock);

    this.category = Category.Books;
  }
}
