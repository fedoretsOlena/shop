import { SelectComponent } from './select';
import { NavComponent } from './nav';
import { CartIndicatorComponent } from './cart-indicator';

export const exportComponents = [
  SelectComponent,
  NavComponent
];

export const components = [
  ...exportComponents,
  CartIndicatorComponent
];
