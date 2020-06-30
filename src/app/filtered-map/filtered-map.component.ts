import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-filtered-map',
  templateUrl: './filtered-map.component.html',
  styleUrls: ['./filtered-map.component.css']
})
export class FilteredMapComponent implements OnInit {
  @Input() public filter: string;
  public url: SafeUrl;
  constructor(private sanitizationService: DomSanitizer){}

  ngOnInit(): void {
    this.url = this.sanitizationService.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15947.3127447947!2d-79.908075!3d-2.2183677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s${encodeURI(this.filter)}!5e0!3m2!1ses!2sec!4v1593475470889!5m2!1ses!2sec`);
  }

}
