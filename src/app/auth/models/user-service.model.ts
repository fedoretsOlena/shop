import { SettingsModel } from '../../core/models';

export interface UserServiceModel extends SettingsModel {
  password: string;
}
