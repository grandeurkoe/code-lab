import { Component } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent {
  numberOne: number = 20;
  numberTwo: number = 30;
  
  add(): number {
    return this.numberOne + this.numberTwo;
  }
}
