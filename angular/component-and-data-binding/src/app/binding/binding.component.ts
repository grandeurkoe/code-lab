import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  numberOne: number = 0;
  numberTwo: number = 0;
  result: number = 0;
  
  add(): void {
    this.result = Number(this.numberOne) + Number(this.numberTwo);
  }

  subtract(): void {
    this.result = this.numberOne - this.numberTwo;
  }

  multiply(): void {
    this.result = this.numberOne * this.numberTwo;
  }

  divide(): void {
    this.result = this.numberOne / this.numberTwo;
  }
}
