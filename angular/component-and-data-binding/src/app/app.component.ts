import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, Angular!';
  myName = 'Vishal Kushwaha';

  greet(): string {
    return `Welcome, ${this.myName}`;
  }
}
