import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsterPage } from './roadster.page';

describe('RoadsterPage', () => {
  let component: RoadsterPage;
  let fixture: ComponentFixture<RoadsterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadsterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
