import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ambik';
  public slides = [
    { src: 'assets/images/box_1_img.jpg' },
    { src: 'assets/images/box_2_img.jpg' },
    { src: 'assets/images/box_1_img.jpg' },
    { src: 'assets/images/box_1_img.jpg' }
  ];
  public items = [
    {
      img: "assets/images/product_1.jpg",
      text: "$6.99"
    },
    {
      img: "assets/images/product_2.jpg",
      text: "$20.99"
    },
    {
      img: "assets/images/product_3.jpg",
      text: "$32.99"
    },
    {
      img: "assets/images/product_4.jpg",
      text: "$15.99"
    },
    {
      img: "assets/images/product_5.jpg",
      text: "$16.99"
    },
    {
      img: "assets/images/product_6.jpg",
      text: "$9.99"
    }
  ]
}
