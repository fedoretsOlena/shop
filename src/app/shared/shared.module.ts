import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { pipes } from './pipes';
import { directives, CanViewDirective } from './directives';
import { components, exportComponents } from './components';

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes
  ],
  exports: [
    ...exportComponents,
    ...directives,
    ...pipes
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    RouterModule
  ]
})
export class SharedModule { }
