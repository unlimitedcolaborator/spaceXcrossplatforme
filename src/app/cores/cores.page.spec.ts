import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresPage } from './cores.page';

describe('CoresPage', () => {
  let component: CoresPage;
  let fixture: ComponentFixture<CoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
