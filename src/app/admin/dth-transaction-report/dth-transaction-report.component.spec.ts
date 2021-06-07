import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DthTransactionReportComponent } from './dth-transaction-report.component';

describe('DthTransactionReportComponent', () => {
  let component: DthTransactionReportComponent;
  let fixture: ComponentFixture<DthTransactionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DthTransactionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DthTransactionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
