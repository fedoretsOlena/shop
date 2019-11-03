import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components } from './components';

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
