import { UserRole } from './role.enum';

export interface SettingsModel {
  id: number;
  login: string;
  email: string;
  roles: UserRole[];
}
