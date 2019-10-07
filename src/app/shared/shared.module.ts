import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pipes } from './pipes';
import { directives } from './directives';
import { components } from './components';

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes
  ],
  exports: [
    ...components,
    ...directives,
    ...pipes
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
