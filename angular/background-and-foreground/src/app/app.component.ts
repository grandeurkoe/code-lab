import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'background-and-foreground';
  backgroundColor: string = "#FFB6C1";
  foregroundColor: string = "#2E8B57";

  onBackgroundChange(event: any) {
    this.backgroundColor = event.target.value;
  }

  onForegroundChange(event: any) {
    this.foregroundColor = event.target.value;
  }
}
