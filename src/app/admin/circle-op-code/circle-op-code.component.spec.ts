import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleOpCodeComponent } from './circle-op-code.component';

describe('CircleOpCodeComponent', () => {
  let component: CircleOpCodeComponent;
  let fixture: ComponentFixture<CircleOpCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleOpCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleOpCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
