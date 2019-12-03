import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { EmailValidatorDirective } from '../core/validators';

@NgModule({
  declarations: [
    ...AuthRoutingModule.components,
    EmailValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    AuthRoutingModule
  ]
})
export class AuthModule { }
