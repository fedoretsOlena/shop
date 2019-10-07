import { Injectable } from '@angular/core';

import { CoreModule } from '../core.module';

import { SettingsModel } from '../models';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
  private settingsStorage: SettingsModel;

  set settings(newSettings: Partial<SettingsModel>) {
    this.settingsStorage = { ...this.settingsStorage, ...newSettings};
  }

  get settings(): Partial<SettingsModel> { // тут Partial обязательно?
    return this.settingsStorage;
  }
}
