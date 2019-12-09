import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { RegExpPatterns } from './reg-exp.patterns';

@Directive({
  selector: '[shEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: boolean } | null {
    return RegExpPatterns.email.test(c.value) ? null : {email: true};
  }
}

