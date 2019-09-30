import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from './components';

import { ProductsService } from './services';

const components = [
   ProductComponent,
   ProductListComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ],
  providers: [
    ProductsService // лучше регистрировать с помощью декоратора Injectable({providedIn: 'root'})
  ]
})
export class ProductsModule { }
