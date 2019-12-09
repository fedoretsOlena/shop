import { AbstractControl } from '@angular/forms';

import { RegExpPatterns } from './reg-exp.patterns';

export class CustomValidators {

  static onlyLetters(control: AbstractControl): { [key: string]: boolean } | null {
    if (null !== control.value && control.value.length > 0) {
      return !RegExpPatterns.onlyLetters.test(control.value) ? {onlyLetters: true} : null;
    }
  }
}
