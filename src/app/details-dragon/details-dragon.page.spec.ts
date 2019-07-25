import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDragonPage } from './details-dragon.page';

describe('DetailsDragonPage', () => {
  let component: DetailsDragonPage;
  let fixture: ComponentFixture<DetailsDragonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDragonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDragonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
