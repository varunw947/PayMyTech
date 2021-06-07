import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKYCComponent } from './update-kyc.component';

describe('UpdateKYCComponent', () => {
  let component: UpdateKYCComponent;
  let fixture: ComponentFixture<UpdateKYCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKYCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
