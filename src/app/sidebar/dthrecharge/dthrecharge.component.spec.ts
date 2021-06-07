import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DthrechargeComponent } from './dthrecharge.component';

describe('DthrechargeComponent', () => {
  let component: DthrechargeComponent;
  let fixture: ComponentFixture<DthrechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DthrechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DthrechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
