import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaccountnumberComponent } from './confirmaccountnumber.component';

describe('ConfirmaccountnumberComponent', () => {
  let component: ConfirmaccountnumberComponent;
  let fixture: ComponentFixture<ConfirmaccountnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmaccountnumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaccountnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
