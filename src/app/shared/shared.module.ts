import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { pipes } from './pipes';
import { directives } from './directives';
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

    RouterModule
  ]
})
export class SharedModule { }
