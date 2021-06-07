import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRechargeCommissionComponent } from './mobile-recharge-commission.component';

describe('MobileRechargeCommissionComponent', () => {
  let component: MobileRechargeCommissionComponent;
  let fixture: ComponentFixture<MobileRechargeCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileRechargeCommissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRechargeCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
