import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

import { IProductModel, ProductModel, ProductsService } from '../../../products';
import { CanComponentDeactivate, DialogService } from '../../../core';
import { CanDeactivateGuard } from '../../../core/guards';

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
    private productsService: ProductsService,
    private dialogService: DialogService
  ) {

    this.productForm = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      sale: [null],
      description: [null, Validators.required],
      isAvailable: [true],
      authors: [[]]
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

  submit(value: IProductModel): void {
    const source$ =
      this.isCreatingMode
        ? this.productsService.addProduct(value)
        : this.productsService.editProduct({...this.product, ...value});

    source$.subscribe(() => {
      this.productForm.reset();
      this.router.navigate(['./admin/products']);
    });
  }

}
