import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapDetailComponent } from './cap-detail.component';

describe('CapDetailComponent', () => {
  let component: CapDetailComponent;
  let fixture: ComponentFixture<CapDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
