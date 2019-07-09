import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadPage } from './payload.page';

describe('PayloadPage', () => {
  let component: PayloadPage;
  let fixture: ComponentFixture<PayloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayloadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
