import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiForwardComponent } from './api-forward.component';

describe('ApiForwardComponent', () => {
  let component: ApiForwardComponent;
  let fixture: ComponentFixture<ApiForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiForwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
