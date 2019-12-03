import { AbstractControl, Validators } from '@angular/forms';

import { RegExpService } from './reg-exp.service';

export class CustomValidators extends Validators {
  constructor() {
    super();
  }

  static onlyLetters(control: AbstractControl): { [key: string]: boolean } | null {
    if (null !== control.value && control.value.length > 0) {
      return !RegExpService.onlyLetters.test(control.value) ? {onlyLetters: true} : null;
    }
  }
}
