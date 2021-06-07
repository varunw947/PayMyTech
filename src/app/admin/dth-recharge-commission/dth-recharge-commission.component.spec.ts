import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DthRechargeCommissionComponent } from './dth-recharge-commission.component';

describe('DthRechargeCommissionComponent', () => {
  let component: DthRechargeCommissionComponent;
  let fixture: ComponentFixture<DthRechargeCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DthRechargeCommissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DthRechargeCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
