import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services';

@Component({
  selector: 'sh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: ['admin@epam.com', [
      Validators.required
    ]],
    password: ['admin', Validators.required]
  });
  serverErrors: { [key: string]: string } = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef,
    private authService: AuthService
  ) {
  }

  submit(e, values): void {
    e.preventDefault();

    this.serverErrors = {};
    this.authService.login(values)
      .then(() => this.router.navigate(['/product-list']))
      .catch((error) => {
        this.serverErrors = { ...error };
        this.cd.detectChanges();
      });
  }

  checkValidity(name: string): { [key: string]: boolean } {
    const control: AbstractControl = this.loginForm.controls[name];

    if (!control || (!control.touched && !control.value )) {
      return;
    }
    const isValid = control.valid && !this.serverErrors.hasOwnProperty(name);

    return {
      'is-valid': isValid,
      'is-invalid': !isValid
    };
  }
}
