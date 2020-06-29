import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ambik';

  public items = [
    {
      img: 'assets/images/product_1.jpg',
      text: '$26.99'
    },
    {
      img: 'assets/images/product_5.jpg',
      text: '$20.99'
    },
    {
      img: 'assets/images/product_6.jpg',
      text: '$32.99'
    },
    {
      img: 'assets/images/product4.jpg',
      text: '$15.99'
    },
    {
      img: 'assets/images/product3.jpg',
      text: '$16.99'
    },
    {
      img: 'assets/images/product1.jpg',
      text: '$19.99'
    }
  ];

  public stores = [
    {
      img: 'assets/images/store5.jpg',
      text: 'irmao'
    },
    {
      img: 'assets/images/store4.jpg',
      text: 'De Prati'
    },
    {
      img: 'assets/images/store2.jpg',
      text: 'Bahía'
    },
    {
      img: 'assets/images/store3.jpg',
      text: 'Posdata'
    },
    {
      img: 'assets/images/store1.jpg',
      text: 'Avenue Boutique'
    },
  ];
}
