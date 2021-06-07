import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributerdetailComponent } from './distributerdetail.component';

describe('DistributerdetailComponent', () => {
  let component: DistributerdetailComponent;
  let fixture: ComponentFixture<DistributerdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributerdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
