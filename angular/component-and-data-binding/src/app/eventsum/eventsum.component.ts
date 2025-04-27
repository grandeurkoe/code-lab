import { Component } from '@angular/core';

@Component({
  selector: 'app-eventsum',
  templateUrl: './eventsum.component.html',
  styleUrls: ['./eventsum.component.css']
})
export class EventsumComponent {
  numberOne: number = 20;
  numberTwo: number = 30;
  result: number = 0;
  
  add(): void {
    this.result = this.numberOne + this.numberTwo;
  }
}
