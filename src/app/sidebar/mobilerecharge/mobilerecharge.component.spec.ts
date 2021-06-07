import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilerechargeComponent } from './mobilerecharge.component';

describe('MobilerechargeComponent', () => {
  let component: MobilerechargeComponent;
  let fixture: ComponentFixture<MobilerechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilerechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilerechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
