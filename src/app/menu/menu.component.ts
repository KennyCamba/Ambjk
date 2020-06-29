import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  isActive(url: string): boolean{
    return this.router.isActive(url, true);
  }

  activeLink(id: string): void{
    console.log(id);
    this.disableLinks();
    document.getElementById(id).classList.add('active');
  }

  disableLinks(): void{
    const elements = document.getElementsByClassName('nav-item');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < elements.length; i++){
      elements[i].classList.remove('active');
    }
  }

}
