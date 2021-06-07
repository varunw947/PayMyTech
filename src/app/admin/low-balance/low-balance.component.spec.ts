import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowBalanceComponent } from './low-balance.component';

describe('LowBalanceComponent', () => {
  let component: LowBalanceComponent;
  let fixture: ComponentFixture<LowBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
