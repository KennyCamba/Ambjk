import { Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GridComponent } from '../grid/grid.component';
@Component({
  selector: 'app-tab-map',
  templateUrl: './tab-map.component.html',
  styleUrls: ['./tab-map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabMapComponent implements OnInit {

  public filter = 'ropa';
  public tpd = 'all';
  public url: SafeUrl;
  public stores: any;
  @ViewChild('grid') grid: GridComponent;
  @ViewChild('gridm') gridm: GridComponent;
  public all = [
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


  constructor(private sanitizationService: DomSanitizer) { }

  ngOnInit(): void {
    this.updateMap();
    this.stores = this.getByType(this.tpd);
  }

  updateMap(): void{
    this.url = this.sanitizationService.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15947.3127447947!2d-79.908075!3d-2.2183677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s${encodeURI(this.filter)}!5e0!3m2!1ses!2sec!4v1593475470889!5m2!1ses!2sec`);
  }

  getByType(type: string): Array<any> {
    switch (type) {
      case 'all':
        return this.all;
      case 'general':
        return [this.all[1], this.all[2]];
      case 'men':
        return [this.all[0], this.all[3]];
      case 'women':
        return [this.all[4]];
      case 'child':
        return [];
      default:
        return [];
    }
  }

  activeLink(id: string, value: string): void{
    this.filter = value;
    this.tpd = id;
    this.updateMap();
    this.grid.update(this.getByType(id));
    this.gridm.update(this.getByType(id));
    this.disableLinks();
    document.getElementById(id).classList.add('active');
  }

  disableLinks(): void{
    const elements = document.getElementsByClassName('nav-link');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < elements.length; i++){
      elements[i].classList.remove('active');
    }
  }

}
