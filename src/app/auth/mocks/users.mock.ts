import { UserRole } from '../../core/models';
import { UserServiceModel } from '../models';

export const serverUsers: UserServiceModel[] = [{
  id: 1,
  login: 'user',
  password: 'zaqwsx',
  email: 'john_doe@gmail.com',
  roles: []
}, {
  id: 1,
  login: 'admin',
  password: 'epam2019',
  email: 'admin@epam.com',
  roles: [ UserRole.ADMIN ]
}];
