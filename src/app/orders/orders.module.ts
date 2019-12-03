import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { components } from './components';
import { ordersFeatureKey, ordersReducer, OrdersEffects } from '../core/store/';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    StoreModule.forFeature(ordersFeatureKey, ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),

    SharedModule
  ]
})
export class OrdersModule {
}
