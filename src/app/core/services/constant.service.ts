import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
  App: string;
  Ver: string;

  constructor(data) {
    Object.assign(this, data);
  }
}
