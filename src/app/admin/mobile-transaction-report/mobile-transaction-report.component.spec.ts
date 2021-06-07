import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTransactionReportComponent } from './mobile-transaction-report.component';

describe('MobileTransactionReportComponent', () => {
  let component: MobileTransactionReportComponent;
  let fixture: ComponentFixture<MobileTransactionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTransactionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTransactionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
