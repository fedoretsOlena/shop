import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent, CartItemComponent } from './components';

import { CartService } from './services';


@NgModule({
  declarations: [
   CartComponent,
   CartItemComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
