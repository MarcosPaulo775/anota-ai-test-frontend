/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardImgComponent } from './card-img.component';

describe('CardImgComponent', () => {
  let component: CardImgComponent;
  let fixture: ComponentFixture<CardImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
