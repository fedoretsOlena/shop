import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    ...AuthRoutingModule.components
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    AuthRoutingModule
  ]
})
export class AuthModule { }
