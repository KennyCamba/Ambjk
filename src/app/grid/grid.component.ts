import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() public items: Array<any>;
  @Input() public cols: number;
  public values: Array<number>;
  public rows: number;
  public size: Array<number>;
  public matriz: Array<Array<any>>;
  constructor() { }

  ngOnInit(): void {
    this.rows =  Math.ceil(this.items.length/this.cols);
    this.values = Array(this.rows).fill(0).map((x, i)=> i);
    this.size = Array(this.cols).fill(0).map((x, i)=> i);
    let index = 0;
    this.matriz = Array();
    for(let i=0; i<this.rows; i++){
      this.matriz.push(new Array());
      for(let j=0; j<this.cols; j++){
        if(index < this.items.length){
          this.matriz[i].push(this.items[index++]);
        }  
      }
    }
    
  }

}
