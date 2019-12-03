import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { UserProfileService } from '../../../core/services';
import { CustomValidators } from '../../../core/validators';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sh-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
  orderForm: FormGroup;

  subs: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private profileService: UserProfileService
  ) {
    this.orderForm = this.fb.group({
      name: [null, [
        Validators.required,
        CustomValidators.onlyLetters
      ]],
      surname: null,
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      phones: this.fb.array([this.createPhoneControl()]),
      pickup: false,
      address: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.subs.add(this.profileService.user$
      .pipe(
        filter(Boolean)
      )
      .subscribe((user) => {
        const prepared = {...user, name: user.login};
        this.orderForm.patchValue(prepared);
      }));

    this.subs.add(this.orderForm.get('pickup').valueChanges
      .subscribe((value) => {
        const addressControl: AbstractControl = this.orderForm.get('address');

        value ? addressControl.clearValidators() : addressControl.setValidators([Validators.required]);
        addressControl.updateValueAndValidity();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onSubmit(value): void {
    console.log('User data: ', value);
    // TODO: add logic for updating order status, etc
    this.router.navigate(['orders/list']);
  }

  onAddPhoneControl(): void {
    const phones = this.orderForm.get('phones') as FormArray;
    phones.push(this.createPhoneControl());
  }

  onDeletePhoneControl(inx: number): void {
    const phones = this.orderForm.get('phones') as FormArray;
    phones.removeAt(inx);
  }

  private createPhoneControl(): FormControl {
    return this.fb.control(null, [
      Validators.pattern('[0-9]+'),
      Validators.minLength(6)
    ]);
  }
}
