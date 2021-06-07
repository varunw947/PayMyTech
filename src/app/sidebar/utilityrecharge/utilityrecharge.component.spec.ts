import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityrechargeComponent } from './utilityrecharge.component';

describe('UtilityrechargeComponent', () => {
  let component: UtilityrechargeComponent;
  let fixture: ComponentFixture<UtilityrechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityrechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityrechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
