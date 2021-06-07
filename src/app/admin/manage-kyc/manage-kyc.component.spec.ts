import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageKYCComponent } from './manage-kyc.component';

describe('ManageKYCComponent', () => {
  let component: ManageKYCComponent;
  let fixture: ComponentFixture<ManageKYCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageKYCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageKYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
