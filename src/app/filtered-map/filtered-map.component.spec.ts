import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredMapComponent } from './filtered-map.component';

describe('FilteredMapComponent', () => {
  let component: FilteredMapComponent;
  let fixture: ComponentFixture<FilteredMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
