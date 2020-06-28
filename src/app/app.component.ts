import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ambjk';
  public slides = [
    { src: 'assets/images/box_1_img.jpg' },
    { src: 'assets/images/box_2_img.jpg' },
    { src: 'assets/images/box_1_img.jpg' },
    { src: 'assets/images/box_1_img.jpg' }
  ];
}
