import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';

// should be imported not from index.ts because circular dependency appear
import { ConstantService } from './services/constant.service';
import { Generated, GenerateFactory, GeneratorService } from './services/generator.service';
import { LocalStorageService } from './services/local-storage.service';
import { CoreStoreModule } from './store/core-store.module';

const constants = new ConstantService({ App: 'TaskManager', Ver: '1.0' });

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    CoreStoreModule,

    // Можно тоже перенести в модуль CoreStoreModule
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    GeneratorService, {
      provide: ConstantService,
      useValue: constants
    }, {
      provide: Generated,
      useFactory: GenerateFactory(4),
      deps: [ GeneratorService ]
  }, {
      provide: localStorage,
      useClass: LocalStorageService
  }]
})
export class CoreModule { }
