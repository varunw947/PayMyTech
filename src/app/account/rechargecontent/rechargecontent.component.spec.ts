import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargecontentComponent } from './rechargecontent.component';

describe('RechargecontentComponent', () => {
  let component: RechargecontentComponent;
  let fixture: ComponentFixture<RechargecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
