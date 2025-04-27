import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  firstImageUrl: string = "../../assets/images/meowya-front-profile.jpg";
  secondImageUrl: string = "../../assets/images/meowya-back-profile.jpg";
}
