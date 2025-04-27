import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  todayDate = new Date();
  todayString = "This is a good string!";
  todayNumber = 7864.2345;
  todayPercentNumber = 0.7414;
  todayCurrency = 1750;
  todayCustom = "welcome to angular!"
}
