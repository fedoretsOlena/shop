import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { catchError, first } from 'rxjs/operators';

import { AuthService } from '../../services';

@Component({
  selector: 'sh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    login: ['admin', Validators.required],
    password: ['epam2019', Validators.required]
  });
  serverErrors: { [key: string]: string } = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
  }

  submit(e, values): void {
    e.preventDefault();

    this.serverErrors = {};
    this.authService.login(values)
      .pipe(
        first(),
        catchError((err) => this.serverErrors = err)
      ).subscribe(() => this.router.navigate(['/product-list']));
  }

  checkValidity(name: string): { [key: string]: boolean } {
    const control: AbstractControl = this.loginForm.controls[name];

    if (!control || !control.touched) {
      return;
    }
    const isValid = (control.valid && control.touched) && !this.serverErrors.hasOwnProperty(name);

    return {
      'is-valid': isValid,
      'is-invalid': !isValid
    };
  }
}
