import { Injectable, InjectionToken } from '@angular/core';

import * as RandExp from 'randexp';

export const Generated = new InjectionToken<string>('generator');

export function GenerateFactory(n: number) {
  return (generator: GeneratorService) => generator.generate(n);
}

@Injectable()
export class GeneratorService {
  generate(length: number): string {
    const rexExp = `[a-z][A-Z][0-9]{0,${length}}`;
    return new RandExp(rexExp).gen();
  }
}
