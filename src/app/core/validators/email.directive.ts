import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { RegExpService } from './reg-exp.service';

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
    return RegExpService.email.test(c.value) ? null : {email: true};
  }
}

