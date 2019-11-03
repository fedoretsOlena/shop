import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { pipes } from './pipes';
import { directives } from './directives';
import { components, exportComponents } from './components';
import { CanViewDirective } from './directives/can-view.directive';

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes,
    CanViewDirective
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
