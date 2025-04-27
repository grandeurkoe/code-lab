import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  numberOne: number = 0;
  numberTwo: number = 0;
  calculatedResult: number = 0;

  constructor(private calculatedService: CalculatorService) {}

  add() {
    this.calculatedResult = this.calculatedService.add(Number(this.numberOne), Number(this.numberTwo));
  }

  subtract() {
    this.calculatedResult = this.calculatedService.subtract(this.numberOne, this.numberTwo);
  }

  multiply() {
    this.calculatedResult = this.calculatedService.multiply(this.numberOne, this.numberTwo);
  }

  divide() {
    this.calculatedResult = this.calculatedService.divide(this.numberOne, this.numberTwo);
  }
}
