import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
    return x - y;
  }

  multiply(x: number, y: number): number {
    return x * y;
  }

  divide(x: number, y: number): number {
    return x / y;
  }
}
