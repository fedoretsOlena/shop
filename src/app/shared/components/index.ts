import { SelectComponent } from './select';
import { NavComponent } from './nav';
import { CartIndicatorComponent } from './cart-indicator';
import { InputComponent } from './input';
import { InputErrorsComponent } from './input-errors';

export const exportComponents = [
  SelectComponent,
  NavComponent,
  InputComponent,
  InputErrorsComponent
];

export const components = [
  ...exportComponents,
  CartIndicatorComponent,
];
