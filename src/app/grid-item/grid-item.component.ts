import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {

  @Input() public image: string;
  @Input() public title: string;
  @Input() public text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
