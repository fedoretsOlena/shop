import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

import { IProductModel, ProductModel } from '../../../products';
import { CanComponentDeactivate, DialogService } from '../../../core';
import { CanDeactivateGuard } from '../../../core/guards';
import { addProduct, AppState, updateProduct } from '../../../core/store';

@Component({
  selector: 'sh-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, CanDeactivateGuard {
  productForm: FormGroup;
  isCreatingMode = true;

  private product: ProductModel;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private dialogService: DialogService
  ) {

    this.productForm = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      sale: [null],
      description: [null, Validators.required],
      isAvailable: [true],
      authors: [[]],
      image: null
    });
  }

  ngOnInit() {

    this.route.data
      .pipe(
        pluck('product'),
        filter(Boolean)
      )
      .subscribe((product: ProductModel) => {
        this.product = product;

        this.productForm.patchValue(product);
        this.isCreatingMode = false;
      });
  }

  canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> {
    if (!this.productForm.touched) {
      return true;
    }

    return this.dialogService.confirm('New product data will not be saved. Are you sure?');
  }

  submit(product: IProductModel): void {

    this.store.dispatch(
      this.isCreatingMode
        ? addProduct({product})
        : updateProduct({product: {...this.product, ...product}})
    );

    this.productForm.reset();
  }
}
