import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductComponent, ProductListComponent, ProductDetailsComponent } from './components';
import { productsFeatureKey, productsReducer, ProductsEffects } from '../core/store';

const components = [
  ProductComponent,
  ProductListComponent,
  ProductDetailsComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [ProductListComponent]
})
export class ProductsModule {}
