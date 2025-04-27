import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  learnerList: string[] = [
    "Lina Moretti",
    "Kairos Bennett",
    "Amara Saito",
    "Julian Vance",
    "Selene Dupont"
  ];
}
